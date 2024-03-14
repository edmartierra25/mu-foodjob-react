import { useState } from 'react';
import {
  Footer,
  Layout as MuxLayout,
  SideNav,
  SkipLinks,
  useSkipLinks,
  UtilityHeader,
} from '@manulife/mux';
import { PartlySunny, Sunny } from '@manulife/mux-cds-icons';
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
              id="item1"
              as={Link}
              to="/item1"
              label="Item 1"
              itemKey="/item1"
              icon={<Sunny />}
            >
              <SideNav.Dropdown
                id="item1_1"
                as="button"
                itemKey="/item1_1"
                label="Item 1.1"
              >
                <SideNav.SubNavItem
                  id="item1_1_1"
                  as={Link}
                  to="/item1_1_1"
                  itemKey="/item1_1_1"
                  label="Item 1.1.1"
                />
                <SideNav.SubNavItem
                  id="item1_1_2"
                  as={Link}
                  to="/item1_1_2"
                  itemKey="/item1_1_2"
                  label="Item 1.1.2"
                />
              </SideNav.Dropdown>
              <SideNav.SubNavItem
                id="item1_2"
                as={Link}
                to="/item1_2"
                itemKey="/item1_2"
                label="Item 1.2"
              />
            </SideNav.NavItem>
            <SideNav.NavItem
              id="item2"
              as={Link}
              to="/item2"
              label="Item 2"
              itemKey="/item2"
              icon={<PartlySunny />}
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
