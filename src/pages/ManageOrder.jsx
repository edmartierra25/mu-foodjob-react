import { H1,  Stack, Table, TextInput, Pill, Button  } from '@manulife/mux';
import {Parser} from '@json2csv/plainjs';
import FileSaver from 'file-saver';

const Admin = () => {


    const mockData = 
    [
     {storeID: "#0001", restaurant: "Kuya Z", orderDate: "01-23-2024", admin: "Rita Ora", orderstatus: "Completed"},
     {storeID: "#0002", restaurant: "Mang Inasal", orderDate: "02-23-2021", admin: "Heart Mill", orderstatus: "Completed"},
     {storeID: "#0003", restaurant: "Sarsa", orderDate: "10-13-1998", admin: "Nirvana" , orderstatus: "Completed"},
     {storeID: "#0004", restaurant: "Tres", orderDate: "01-03-2002", admin: "ACDC" , orderstatus: "Completed"},
     {storeID: "#0005", restaurant: "Giligans", orderDate: "02-14-2011", admin: "IV Of Spades" , orderstatus: "Completed"},
    ];

    const mockExportMangInasal = 
    [
     {storeID: "#0001", restaurant: "Mang Inasal", orderDate: "01-23-2024", admin: "Rita Ora", orderName: "Kare-kare", orderQuantity: "20"},
     {storeID: "#0001", restaurant: "Mang Inasal", orderDate: "01-23-2024", admin: "Rita Ora", orderName: "Fried Chicken", orderQuantity: "13"},
     {storeID: "#0001", restaurant: "Mang Inasal", orderDate: "01-23-2024", admin: "Rita Ora" , orderName: "Shanghai", orderQuantity: "11"},
     {storeID: "#0001", restaurant: "Mang Inasal", orderDate: "01-23-2024", admin: "Rita Ora" , orderName: "Shawarma", orderQuantity: "15"},
     {storeID: "#0001", restaurant: "Mang Inasal", orderDate: "01-23-2024", admin: "Rita Ora" , orderName: "Crispy Pata", orderQuantity: "17"},
    ];
    const mockExportKuyaZ = 
    [
     {storeID: "#0001", restaurant: "Kuya Z", orderDate: "01-23-2024", admin: "Rita Ora", orderName: "Kare-kare", orderQuantity: "20"},
     {storeID: "#0001", restaurant: "Kuya Z", orderDate: "01-23-2024", admin: "Rita Ora", orderName: "Fried Chicken", orderQuantity: "13"},
     {storeID: "#0001", restaurant: "Kuya Z", orderDate: "01-23-2024", admin: "Rita Ora" , orderName: "Shanghai", orderQuantity: "11"},
     {storeID: "#0001", restaurant: "Kuya Z", orderDate: "01-23-2024", admin: "Rita Ora" , orderName: "Shawarma", orderQuantity: "15"},
     {storeID: "#0001", restaurant: "Kuya Z", orderDate: "01-23-2024", admin: "Rita Ora" , orderName: "Crispy Pata", orderQuantity: "17"},
    ];

    const exportToCSV = (storeID) => {
        // const jsonData = JSON.stringify(mockData);
        const parser = new Parser();
        if(storeID === "#0001"){
        const csvData = parser.parse(mockExportKuyaZ);
        const blob = new Blob([csvData], {type:'text/csv;charset=utf-8'});
        FileSaver.saveAs(blob, 'KuyaZ.csv')

        }else if(storeID === "#0002"){
        const csvData = parser.parse(mockExportMangInasal);
        const blob = new Blob([csvData], {type:'text/csv;charset=utf-8'});
        FileSaver.saveAs(blob, 'MangInasal.csv')

        }
        
    
        
    }

    const tableRows = mockData.map((data) => ({
        storeID: {
            sortValue: data.storeID,
            label: (data.storeID),
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
        orderstatus: {
            sortValue: data.orderstatus,
            label: (data.orderstatus),
        },
        action: {
            label: (<Button small onClick={() => exportToCSV((data.storeID))}>Download Report</Button>),
        },
    }));

    const pills = [
        { value: 'AllOrders', label: 'All Orders' },
        { value: 'TodayOrders', label: "Today's Orders" },
        { value: 'CompletedOrders', label: 'Completed Orders' },
      ];

    return (
        <Stack align="flex-start">
            <H1>Manage Order</H1>
            <Pill.Box aria-label="Select one">
                {pills.map((pill) => (
                        <Pill
                            key={pill.value}
                            value={pill.value}
                            label={pill.label}
                            customStyle={{ rootStyle: { marginRight: '10px' } }}
                        />
                    ))}
            </Pill.Box>
            <Stack direction="row" justify="flex-end">
            <TextInput variant={TextInput.VARIANT.BASIC_LINE_DASHED} placeholder="Search"/>
            {/* <Button variant={Button.VARIANT.SECONDARY} icon={<CDS.Filter/>}>Filter</Button><Button icon={<CDS.ButtonPlusOutlined/>}>Add New</Button> */}
            </Stack>
            
            <Table id="order-table"
                header={[
                    {
                        id: 'storeID',
                        label: 'Store ID',
                        isSortable: true
                    },
                    {
                        id: 'restaurant',
                        label: 'Store Name',
                        isSortable: true
                    },
                    {
                        id: 'orderDate',
                        label: 'Order Date',
                        maxWidth: '20px',
                        isSortable: true
                    },
                    {
                        id: 'admin',
                        label: 'Admin',
                        maxWidth: '20px',
                        isSortable: true
                    },
                    {
                        id: 'orderstatus',
                        label: 'Status',
                        maxWidth: '20px',
                        textAlign: 'center'
                    },
                    {
                        id: 'action',
                        label: 'Action',
                        maxWidth: '20px',
                        textAlign: 'center'
                    }, ]} 
                rows={tableRows} />
        </Stack>
    );
}

export default Admin;
