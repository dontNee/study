import { useState } from "react";
import Footer from "../footer";
import BreadCrumb from "./BreadCrumb";

export default function PageContent({ title, subTitle, children } : any) {

    return (
        <div className="container-fluid p-4">
            <BreadCrumb title={title} subTitle={subTitle} />
              { children }
            <Footer />
        </div>
    );
}