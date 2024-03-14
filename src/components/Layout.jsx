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

const Layout = ({ children, toggleLang }) => {
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
          <UtilityHeader.SignIn />
          <UtilityHeader.Lang onClick={toggleLang} />
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
              id="view-restaurants"
              as={Link}
              to="/view-restaurants"
              label="View Restaurants"
              itemKey="/view-restaurants"
              icon={<CDS.Apple />}
            />
            {/* TODO: to be removed because menu is expected to show after clicking
            a restaurant */}
            <SideNav.NavItem
              id="view-menu"
              as={Link}
              to="/view-menu"
              label="View Menu"
              itemKey="/view-menu"
              icon={<CDS.Cart />}
            />
            <SideNav.NavItem
              id="view-cart"
              as={Link}
              to="/view-cart"
              label="View Cart"
              itemKey="/view-cart"
              icon={<CDS.Cart />}
            />
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
