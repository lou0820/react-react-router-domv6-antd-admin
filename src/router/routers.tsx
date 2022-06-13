import Company from "../pages/company"
import DataEntry from "../pages/test";
import LayoutElement from "@/components/layout";

const routers = [
  {
    path: '/',
    element: <LayoutElement />,
    children: [
      {
        path: '/company',
        name: '企业用能档案',
        element: <Company />
      },
      {
        path: '/test/data',
        name: '数据录入',
        element: <DataEntry />
      },
    ]
  },
 
]

export {
  routers
}