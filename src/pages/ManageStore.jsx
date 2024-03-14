import { H1,  Stack, Table, Button  } from '@manulife/mux';
import * as CDS from '@manulife/mux-cds-icons';

const ManageStore = () => {
    const mockData = 
    [
     {storeID: "#0001", contact:"09124551239", restaurant: "Kuya Z", orderDate: "01-23-2024", admin: "Rita Ora"},
     {storeID: "#0002", contact:"09124551239", restaurant: "Mang Inasal", orderDate: "02-23-2021", admin: "Heart Mill"},
     {storeID: "#0003", contact:"09124551239", restaurant: "Sarsa", orderDate: "10-13-1998", admin: "Nirvana"},
     {storeID: "#0004", contact:"09124551239", restaurant: "Tres", orderDate: "01-03-2002", admin: "ACDC"},
     {storeID: "#0005", contact:"09124551239", restaurant: "Giligans", orderDate: "02-14-2011", admin: "IV Of Spades" },
    ];

    const tableRows = mockData.map((data) => ({
        storeID: {
            sortValue: data.storeID,
            label: (data.storeID),
        },
        contact: {
            label: (data.contact),
        },
        restaurant: {
            sortValue: data.restaurant,
            label: (data.restaurant),
        },
        orderDate: {
            sortValue: data.orderDate,
            label: (data.orderDate),
        },
        admin: {
            sortValue: data.admin,
            label: (data.admin),
        },
        action: {
            sortValue: data.action,
            label: (
                <Stack direction="row" justify="flex-end">
                    <Button >EDIT</Button>
                    <Button >DELETE</Button>
                </Stack>),
        },
    }));

    return (
        <Stack align="flex-start">
            <H1>Manage Store</H1>
            <Stack direction="row" justify="flex-end">
            {/* <TextInput variant={TextInput.VARIANT.BASIC_LINE_DASHED} placeholder="Search by Restaurant ID" /> */}
            <Button align="flex-start" variant={Button.VARIANT.SECONDARY} icon={<CDS.ButtonPlusOutlined/>}>Add New</Button>
            </Stack>
            
            <Table id="store-table"
                header={[
                    {
                        id: 'storeID',
                        label: 'Restaurant ID',
                        isSortable: true
                    },
                    {
                        id: 'restaurant',
                        label: 'Store Name',
                        isSortable: true
                    },
                    {
                        id: 'contact',
                        label: 'Contact',
                        isSortable: false
                    },
                    {
                        id: 'orderDate',
                        label: 'Order Date',
                        maxWidth: '20px',
                        textAlign: 'center',
                        isSortable: true
                    },
                    {
                        id: 'admin',
                        label: 'Admin',
                        maxWidth: '20px',
                        textAlign: 'center',
                        isSortable: true
                    },
                    {
                        id: 'action',
                        label: 'Action',
                        maxWidth: '20px',
                        textAlign: 'center',
                        isSortable: true
                    }, ]} 
                rows={tableRows} />
        </Stack>
    );
}

export default ManageStore;
