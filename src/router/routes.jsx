import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GridCards from '../components/requests/GridCards';
import Profile from '../components/profile/Profile';
import NoMatch from '../components/404/404';
import Proposals from '../components/propsals/Proposals';
import ProposalsInfo from '../components/propsals/Information/ProposalsInfo';
import ApplicationForm from '../components/propsals/Application/ApplicationForm';
import DraftDashboard from '../components/propsals/drafts/draftDashboard';
import AppProposalPage from '../components/propsals/admin/AddProposal/AddProposalPage';
import Can from '../config/Can';
import UpdateDraftPage from '../components/propsals/Application/UpdateDraftPage';
import RespondHomePage from '../components/propsals/reviewer/respond/RespondHomePage';
import PendingReviews from '../components/propsals/admin/Reviews/PendingReviews';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={GridCards} />

    <Route 
    path="/profile" 
    render={props => (
        <Can I="view" a="Profile">
          {() => <Profile {...props} />}
        </Can>
      )}
     />
     <Route 
    path="/admin/PendingReviews" 
    render={props => (
        <Can I="view" a="PendingReviews">
          {() => <PendingReviews {...props} />}
        </Can>
      )}
     />
    <Route
      exact
      path="/admin/proposals/add"
      render={props => (
        <Can I="add" a="Proposal">
          {() => <AppProposalPage {...props} />}
        </Can>
      )}
    />
    <Route
      exact
      path="/proposals/respond"
      render={props => (
        <Can I="review" a="Proposal">
          {() => <RespondHomePage {...props} />}
        </Can>
      )}
    />
    <Route exact path="/proposals/drafts" render={props => (
        <Can I="view" a="Teams">
          {() => <DraftDashboard {...props} />}
        </Can>
      )}
    />
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
    <Route 
    exact
    path="/proposals/apply/:id"
    render={props => (
      <Can I="apply" a="Proposal">
        {() => <ApplicationForm {...props} />}
      </Can>
      )} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
