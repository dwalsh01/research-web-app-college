import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GridCards from '../components/requests/GridCards';
import Profile from '../components/profile/Profile';
import NoMatch from '../components/404/404';
import Proposals from '../components/propsals/Proposals';
import Teams from '../components/teams/Teams';
import ProposalsInfo from '../components/propsals/Information/ProposalsInfo';
import ApplicationForm from '../components/propsals/Application/ApplicationForm';
import draftDashboard from '../components/propsals/drafts/draftDashboard';
import AppProposalPage from '../components/propsals/admin/AddProposal/AddProposalPage';
import Can from '../config/Can';
import UpdateDraftPage from '../components/propsals/Application/UpdateDraftPage';
import RespondHomePage from '../components/propsals/admin/respond/RespondHomePage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={GridCards} />
    <Route path="/profile" component={Profile} />
    <Route
      exact
      path="/admin/proposals"
      render={props => (
        <Can I="add" a="Proposal">
          {() => <AppProposalPage {...props} />}
        </Can>
      )}
    />
    <Route
      exact
      path="/admin/proposals/respond"
      render={props => (
        <Can I="accept" a="Application">
          {() => <RespondHomePage {...props} />}
        </Can>
      )}
    />
    <Route path="/teams/dashboard" component={Teams} />
    <Route exact path="/proposals/drafts" component={draftDashboard} />
    <Route
      exact
      path="/proposals/all"
      render={props => (
        <Can I="view" a="Proposal">
          {() => <Proposals {...props} />}
        </Can>
      )}
    />
    <Route
      exact
      path="/proposals/:id"
      render={props => (
        <Can I="view" a="Proposal">
          {() => <ProposalsInfo {...props} />}
        </Can>
      )}
    />
    <Route
      exact
      path="/proposals/update/:id"
      render={props => (
        <Can I="view" a="Draft">
          {() => <UpdateDraftPage {...props} />}
        </Can>
      )}
    />
    <Route exact path="/proposals/apply/:id" component={ApplicationForm} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
