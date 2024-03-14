import { H1, P, Stack } from '@manulife/mux';

const Order = ({ title }) => (
  <Stack align="flex-start">
    <H1>{title}</H1>
    <P>Content for {title} goes here.</P>
  </Stack>
);

export default Order;
