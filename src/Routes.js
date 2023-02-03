import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import { Main as MainLayout, Fixed as FixedLayout } from './layouts';

// Landing pages
import { Home as HomeView } from './views/landingPages';

// Supporting pages
import {
  About as AboutView,
  Pricing as PricingView,
  Faq as FaqView,
  Contract as ContractView,
  MaintenanceMode as MaintenanceModeView,
  NotFound as NotFoundView,
} from './views/supportingPages';

// Documentation pages
import {
  Introduction as IntroductionView,
  QuickStart as QuickStartView,
  Colors as ColorsView,
  TypographyComponent as TypographyComponentView,
  Shadows as ShadowsView,
  ContainerComponent as ContainerComponentView,
  Layouts as LayoutsView,
  Plugins as PluginsView,
  Support as SupportView,
  Icons as IconsView,
  Illustrations as IllustrationsView,
  ChangeLog as ChangeLogView,
} from './views/docs';
const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-about"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={AboutView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-pricing"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={PricingView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-faq"
        element={((matchProps) => (
          <WithLayout {...matchProps} component={FaqView} layout={MainLayout} />
        ))()}
      />
      <Route
        exact
        path="/contract-analysis"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ContractView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-maintenance-mode"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={MaintenanceModeView}
            layout={MainLayout}
          />
        ))()}
      />

      <Route
        exact
        path="/docs-introduction"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={IntroductionView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-quick-start"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={QuickStartView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-colors"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ColorsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-typography"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={TypographyComponentView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-shadows"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ShadowsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-container"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ContainerComponentView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-layouts"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={LayoutsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-plugins"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={PluginsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-icons"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={IconsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-illustrations"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={IllustrationsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-support"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={SupportView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-change-log"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ChangeLogView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-not-found"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        path="*"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MainLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
