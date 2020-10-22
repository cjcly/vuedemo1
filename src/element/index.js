import {
    Container,
    Aside,
    Header,
    Main,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    Icon,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Tag,
    Row,
    Col,
    Card,
    Table,
    TableColumn,
    Dialog,
    Form,
    FormItem,
    Pagination,
    Input,
    Select,
    Option,
    Switch,
    DatePicker,
    MessageBox,
    Message
} from 'element-ui';
const element = {
    install: function(Vue) {
        Vue.use(Container)
        Vue.use(Aside)
        Vue.use(Header)
        Vue.use(Main)
        Vue.use(Menu)
        Vue.use(MenuItem)
        Vue.use(MenuItemGroup)
        Vue.use(Submenu)
        Vue.use(Icon)
        Vue.use(Button)
        Vue.use(Breadcrumb)
        Vue.use(BreadcrumbItem)
        Vue.use(Dropdown)
        Vue.use(DropdownMenu)
        Vue.use(DropdownItem)
        Vue.use(Tag)
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Card)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Dialog)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Pagination)
        Vue.use(Input)
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(Switch)
        Vue.use(DatePicker)
        Vue.prototype.$confirm = MessageBox.confirm
        Vue.prototype.$message = Message
    }
}
export default element