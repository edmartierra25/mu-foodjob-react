import { H1, P, Stack } from '@manulife/mux';
import CardWrapper from 'src/components/CardWrapper';
import MenuItem from 'src/components/MenuItem';

const menuItems = [{
    name: "MenuItem1"
}, {
    name: "MenuItem2"
}, {
    name: "MenuItem3"
}, {
    name: "MenuItem4"
}, {
    name: "MenuItem5"
}, {
    name: "MenuItem6"
}, {
    name: "MenuItem7"
}, {
    name: "MenuItem8"
}, {
    name: "MenuItem9"
}, {
    name: "MenuItem10"
},]

const Menu = ({ title }) => (
    <Stack align="flex-start">
        <H1>LOGO HERE</H1>
        <P>Content for {title} goes here.</P>
        <CardWrapper maxWidth='100%'>
            <Stack direction="row" justify="space-around" >
                {menuItems.map((item) => <MenuItem name={item.name} />)}
            </Stack>
        </CardWrapper>
    </Stack>
);

export default Menu;
