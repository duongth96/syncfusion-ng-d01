export interface GroupMenu{
    name:string,
    menu:Array<MenuItem>
}

export interface MenuItem {
    route?:string,
    label?:string,
    icon?:string,
    children?:Array<MenuItem>
}