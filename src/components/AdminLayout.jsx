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

const AdminLayout = ({ children, toggleLang }) => {
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
              id="menu"
              as={Link}
              to="/menu"
              label="Menu"
              itemKey="/item1"
              icon={<CDS.Apple />}
             />
             <SideNav.NavItem
              id="viewOrder"
              as={Link}
              to="/viewOrder"
              label="View Order"
              itemKey="/item2"
              icon={<CDS.Blog1 />}
             />
             <SideNav.NavItem
              id="history"
              as={Link}
              to="/history"
              label="History"
              itemKey="/item3"
              icon={<CDS.Calendar />}
             />
             <SideNav.NavItem
              id="report"
              as={Link}
              to="/report"
              label="Report"
              itemKey="/item4"
              icon={<CDS.Will />}
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

export default AdminLayout;
