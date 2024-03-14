import { H1, P, Stack } from '@manulife/mux';
import CardWrapper from 'src/components/CardWrapper';
import MenuItem from 'src/components/MenuItem';

const menuItems = [{
    name: "MenuItem1",
    src: 'http://localhost:3001/images/menus/classic.jpg'
}, {
    name: "MenuItem2",
    src: 'http://localhost:3001/images/menus/classic.jpg'

}, {
    name: "MenuItem3",
    src: 'http://localhost:3001/images/menus/classic.jpg'

}, {
    name: "MenuItem4",
    src: 'http://localhost:3001/images/menus/classic.jpg'

}, {
    name: "MenuItem5",
    src: 'http://localhost:3001/images/menus/classic.jpg'

}, {
    name: "MenuItem6",
    src: 'http://localhost:3001/images/menus/classic.jpg'

}, {
    name: "MenuItem7",
    src: 'http://localhost:3001/images/menus/classic.jpg'

}, {
    name: "MenuItem8",
    src: 'http://localhost:3001/images/menus/classic.jpg'

}, {
    name: "MenuItem9",
    src: 'http://localhost:3001/images/menus/classic.jpg'

}, {
    name: "MenuItem10",
    src: 'http://localhost:3001/images/menus/classic.jpg'

},]

const Menu = ({ title }) => (
    <Stack align="flex-start">
        <H1>LOGO HERE</H1>
        <P>Content for {title} goes here.</P>
        <CardWrapper maxWidth='100%'>
            <Stack direction="row" justify="space-around" >
                {menuItems.map((item) => <MenuItem {...item} />)}
            </Stack>
        </CardWrapper>
    </Stack>
);

export default Menu;
