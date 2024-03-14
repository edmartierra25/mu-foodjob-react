import { colors, H1, H2, LANG, P, Stack, TextLink, useLang } from '@manulife/mux';
import { HeartFilled } from '@manulife/mux-cds-icons';
import { Foundations, Manulife, ManulifeFr } from '@manulife/mux-logos';

import Card from 'src/components/CardWrapper';

const logoStyle = {
  backgroundColor: colors.light_2_grey,
  borderRadius: '0.25rem',
  display: 'flex',
  height: 'calc(var(--line-height-lg) * 1.75)',
  padding: '0.75rem 1rem',
};

const Home = () => {
  const lang = useLang();

  return (
    <Stack justify="center" gap="3rem" style={{ minHeight: 'calc(100vh - 300px)' }}>
      <div className="logo-container">
        <img src="/vite.svg" className="logo" alt="logo" />
      </div>
      <H1>
        Welcome to <b>MUX</b> <i>Vite</i> React starter template
      </H1>
      <Card maxWidth="1024px">
        <Stack
          className="prose-lg"
          direction="row"
          gap="0.75rem"
          justify="center"
          style={{ fontSize: 'var(--font-size-lg)' }}
        >
          Made with <HeartFilled style={{ color: colors.coral }} /> at
          {lang === LANG.FR_CA ? (
            <ManulifeFr.COLOR alt="Manulife logo" style={logoStyle} />
          ) : (
            <Manulife.COLOR alt="Manulife logo" style={logoStyle} />
          )}
          using
          <Foundations.MUX_FULL style={{ height: 'calc(var(--line-height-lg) * 2.5)' }} />
        </Stack>
      </Card>
      <P>
        Edit <code>src/App.jsx</code> and save to reload.
      </P>
      <H2>Get familiar:</H2>
      <Stack
        display="inline-flex"
        direction="row"
        justify="center"
        style={{ width: '100%' }}
      >
        <Card title="Learn about MUX">
          <TextLink to="https://mux.manulife.com" isExternal>
            Read MUX Docs
          </TextLink>
        </Card>
        <Card title="Learn about React">
          <TextLink to="https://beta.reactjs.org/" isExternal>
            Read React.js Docs (New)
          </TextLink>
        </Card>
        <Card title="Learn about Vite">
          <TextLink to="https://vitejs.dev/" isExternal>
            Read Vite Docs
          </TextLink>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Home;
