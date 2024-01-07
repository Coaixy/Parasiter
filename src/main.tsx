import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Index from './Views/Index.tsx';
import Play from './Views/Play.tsx';
import Finish from './Views/Finish.tsx';
import Risk from './Views/Risk.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
  },
  {
    path: "/play",
    element: <Play></Play>,
  },
  {
    path: "/finish",
    element: <Finish></Finish>,
  },
  {
    path: "/risk",
    element: <Risk></Risk>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)


