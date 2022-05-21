import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const DashboardLayout = lazy(() => import('../Modules/Dashboard/Dashboard'));
const HomeLayout = lazy(() => import('../Modules/Dashboard/User/Home/Home'));
const ChatLayout = lazy(() => import('../Modules/Dashboard/User/Chat/Chat'));
const LoginLayout = lazy(() => import('../Modules/Dashboard/Auth/LoginScreen/LoginScreen'));
const SignupLayout = lazy(() => import('../Modules/Dashboard/Auth/SignupScreen/SignupScreen'));
const SubscriptionsLayout = lazy(() => import('../Modules/Dashboard/Admin/SubscriptionList/SubscriptionList'));
const UsersListLayout = lazy(() => import('../Modules/Dashboard/Admin/UsersListScreen/UsersListScreen'));
const PackageListLayout = lazy(() => import('../Modules/Dashboard/Admin/PackageManagement/PackageList'));
const AddPackageLayout = lazy(() => import('../Modules/Dashboard/Admin/PackageManagement/AddPackage/AddPackage'));
const SettingsLayout = lazy(() => import('../Modules/Dashboard/User/Settings/Settings'));
const ThemeEditorLayout = lazy(() => import('../Modules/Dashboard/User/ThemeEditor/ThemeEditor'));
const RoleListLayout = lazy(() => import('../Modules/Dashboard/User/RoleManagement/RoleList'));
const AddRoleLayout = lazy(() => import('../Modules/Dashboard/User/RoleManagement/AddRole/AddRole'));
const ThemeListLayout = lazy(() => import('../Modules/Dashboard/User/ThemeList/ThemeList'));
const MemberListLayout = lazy(() => import('../Modules/Dashboard/Admin/MemberList/MemberList'));
const AddMemberLayout = lazy(() => import('../Modules/Dashboard/Admin/MemberList/AddMember/AddMember'));
// Portfolio routes
const PortfolioLayout = lazy(() => import('../Modules/Portfolio/Portfolio'));
const HomePageLayout = lazy(() => import('../Modules/Portfolio/Home/Home'));
const BlogPageLayout = lazy(() => import('../Modules/Portfolio/Blog/Blog'));
const FeaturesLayout = lazy(() => import('../Modules/Portfolio/Features/Features'));
const PricingLayout = lazy(() => import('../Modules/Portfolio/Pricing/Pricing'));
const ContactLayout = lazy(() => import('../Modules/Portfolio/Contact/Contact'));
const DemoLayout = lazy(() => import('../Modules/Portfolio/Demo/Demo'));
const MarketPlacesLayout = lazy(() => import('../Modules/Portfolio/MarketPlaces/MarketPlaces'));
const VirtualEventsLayout = lazy(() => import('../Modules/Portfolio/VirtualEvents/VirtualEvents'));
const HealthCareLayout = lazy(() => import('../Modules/Portfolio/HealthCare/HealthCare'));
const HiringJobLayout = lazy(() => import('../Modules/Portfolio/HiringJob/HiringJob'));
const AboutUsLayout = lazy(() => import('../Modules/Portfolio/AboutUs/AboutUs'));
const EducationLayout = lazy(() => import('../Modules/Portfolio/Education/Education'));
const SocialActivitiesLayout = lazy(() => import('../Modules/Portfolio/SocialActivities/SocialActivities'));

export const routes = ({ actions, showSuccess }) => (
    [
        {
            path: '/',
            element: (<PortfolioLayout />),
            children: [
                {
                    index: true,
                    element: <Navigate to="/home" />
                },
                {
                    path: 'home',
                    element: <HomePageLayout />
                },
                {
                    path: 'blog',
                    element: <BlogPageLayout />
                },
                {
                    path: 'features',
                    element: <FeaturesLayout />
                },
                {
                    path: 'pricing',
                    element: <PricingLayout />
                },
                {
                    path: 'contact',
                    element: <ContactLayout />
                },
                {
                    path: 'demo',
                    element: <DemoLayout />
                },
                {
                    path: 'market-places',
                    element: <MarketPlacesLayout />
                },
                {
                    path: 'virtual-events',
                    element: <VirtualEventsLayout />
                },
                {
                    path: 'health-care',
                    element: <HealthCareLayout />
                },
                {
                    path: 'job-hiring',
                    element: <HiringJobLayout />
                },
                {
                    path: 'about',
                    element: <AboutUsLayout />
                },
                {
                    path: 'education',
                    element: <EducationLayout />
                },
                {
                    path: 'social-activities',
                    element: <SocialActivitiesLayout />
                }

            ]
        },
        {
            path: '/auth',
            element: (<Outlet />),
            children: [
                {
                    index: true,
                    element: <Navigate to="/auth/login" />
                },
                {
                    path: 'login',
                    element: <LoginLayout />
                },
                {
                    path: 'signup',
                    element: <SignupLayout />
                }
            ]
        },
        {
            path: '/app',
            element: actions.length > 0 ? (<DashboardLayout />) : <Navigate to="/auth/login" />,
            children: [
                {
                    path: 'users',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'User Management'} actions={actions} component={UsersListLayout} />)
                },
                {
                    path: 'subscriptions',
                    element: (<SubscriptionsLayout />)
                },
                {
                    path: 'packages',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'Package Management'} actions={actions} component={PackageListLayout} />)
                },
                {
                    path: 'add-package',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'Package Management'} actions={actions} component={AddPackageLayout} />)
                },
                {
                    path: 'subscriptions',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'Subscription Management'} actions={actions} component={SubscriptionsLayout} />)
                },
                {
                    path: 'settings',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'App Settings'} actions={actions} component={SettingsLayout} />)
                },
                {
                    path: 'theme-editor',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'Customize Widget'} actions={actions} component={ThemeEditorLayout} />)
                },
                {
                    path: 'roles',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'Role Management'} actions={actions} component={RoleListLayout} />)
                },
                {
                    path: 'add-role',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'Role Management'} actions={actions} component={AddRoleLayout} />)
                },
                {
                    path: 'members',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'Role Management'} actions={actions} component={MemberListLayout} />)
                },
                {
                    path: 'add-member',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'Role Management'} actions={actions} component={AddMemberLayout} />)
                },
                {
                    path: 'themes',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'Role Management'} actions={actions} component={ThemeListLayout} />)
                },
                {
                    path: 'chat',
                    element: (<PrivateRoute showSuccess={showSuccess} actionName={'Chat Accessible'} actions={actions} component={ChatLayout} />)
                }
            ]
        },
    ]
)