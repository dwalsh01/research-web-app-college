/* eslint-disable no-underscore-dangle */
import { Ability, AbilityBuilder } from '@casl/ability';
import store from '../store/index';

// Defines how to detect object's type
function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item;
  }
  return item.__type;
}

const ability = new Ability([], { subjectName });

let currentAuth;
store.subscribe(() => {
  const prevAuth = currentAuth;
  currentAuth = store.getState().currentUserReducer;

  if (prevAuth !== currentAuth) {
    ability.update(defineRulesFor(currentAuth));
  }
});

function defineRulesFor(auth) {
  const { can, rules, cannot } = AbilityBuilder.extract();
  if (auth.role === 'researcher') {
    can('view', 'Researcher', { userId: auth.user.id });
    cannot('view', 'Admin', { userId: auth.user.id });
  }

  return rules;
}

export default ability;
