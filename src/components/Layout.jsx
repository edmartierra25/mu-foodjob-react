import { useState } from 'react';
import {
  Footer,
  Layout as MuxLayout,
  SideNav,
  SkipLinks,
  useSkipLinks,
  UtilityHeader,
} from '@manulife/mux';
import * as CDS from '@manulife/mux-cds-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Layout = ({ children, toggleLang, role }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { mainContentRef, mainNavRef, subNavRef, footerRef, ...skipLinksProps } =
    useSkipLinks();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <MuxLayout
      header={
        <UtilityHeader skipLinks={<SkipLinks {...skipLinksProps} />}>
          <UtilityHeader.HeaderButton label={role.toUpperCase()} icon={<CDS.Person />}>
            <UtilityHeader.MenuItem label="Manage your Manulife ID" />
            <UtilityHeader.MenuItem label="Sign Out" />
          </UtilityHeader.HeaderButton>
        </UtilityHeader>
      }
      footer={<Footer ref={footerRef} />}
      sideNav={
        <SideNav
          activeKey={pathname}
          brandLogoProps={{
            onClick: () => navigateHome(),
          }}
          mobileFooterItems={[
            <SideNav.SignIn key="signin" />,
            <SideNav.Lang key="lang" onClick={toggleLang} />,
          ]}
          onToggleSideNav={setIsSideNavOpen}
          mainNavRef={mainNavRef}
          subNavRef={subNavRef}
          skipLinks={<SkipLinks {...skipLinksProps} />}
        >
          <SideNav.Section id="personal">
            <SideNav.NavItem
              id="home"
              as={Link}
              to="/home"
              label="Home"
              itemKey="/item1"
              icon={<CDS.Home1 />}
            />
            {role === 'user' && (
              <>
                <SideNav.NavItem
                  id="view-restaurants"
                  as={Link}
                  to="/view-restaurants"
                  label="View Restaurants"
                  itemKey="/view-restaurants"
                  icon={<CDS.Apple />}
                />
                <SideNav.NavItem
                  id="view-cart"
                  as={Link}
                  to="/view-cart"
                  label="View Cart"
                  itemKey="/view-cart"
                  icon={<CDS.Cart />}
                />
              </>
            )}
            {role === 'admin' && (
              <>
                <SideNav.NavItem
                  id="manage-order"
                  as={Link}
                  to="/manage-order"
                  label="Manage Order"
                  itemKey="/manage-order"
                  icon={<CDS.Cart />}
                />
                <SideNav.NavItem
                  id="manage-store"
                  as={Link}
                  to="/manage-store"
                  label="Manage Store"
                  itemKey="/manage-store"
                  icon={<CDS.Retail />}
                />
              </>
            )}
          </SideNav.Section>
        </SideNav>
      }
      isSideNavOpen={isSideNavOpen}
    >
      <div ref={mainContentRef} style={{ padding: '1.5rem' }} tabIndex="-1">
        {children}
      </div>
    </MuxLayout>
  );
};

export default Layout;
