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
  const { can, rules } = AbilityBuilder.extract();
  if (auth.role === 'researcher') {
    can('view', 'Proposal', { userId: auth.user.id });
    can('view', 'Draft', { userId: auth.user.id });
    can('view', 'Profile', { userId: auth.user.id });
    can('view', 'Teams', { userId: auth.user.id });
  }
  if (auth.role === 'admin') {
    can('add', 'Proposal', { userId: auth.user.id });
    can('accept', 'Application', { userId: auth.user.id });
    can('reject', 'Application', { userId: auth.user.id });
  }
  if (auth.role === 'reviewer') {
    can('review', 'Proposal', { userId: auth.user.id });
  }
  return rules;
}

export default ability;
