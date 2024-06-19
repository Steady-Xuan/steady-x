import React, {  } from "react";
import { storiesOf } from "@storybook/react";
import {  } from "@storybook/addon-actions";
import InfiniteScrolling from "./InfiniteScrolling";
const data = [{
    clo1: '1-1',
    clo2: '1-2',
    clo3: '1-3',
    clo4: '1-4',
}, {
    clo1: '2-1',
    clo2: '2-2',
    clo3: '2-3',
    clo4: '2-4',
}, {
    clo1: '3-1',
    clo2: '3-2',
    clo3: '3-3',
    clo4: '3-4',
}, {
    clo1: '4-1',
    clo2: '4-2',
    clo3: '4-3',
    clo4: '4-4',
}, {
    clo1: '5-1',
    clo2: '5-2',
    clo3: '5-3',
    clo4: '5-4',
}, {
    clo1: '6-1',
    clo2: '6-2',
    clo3: '6-3',
    clo4: '6-4',
}, {
    clo1: '1-1',
    clo2: '1-2',
    clo3: '1-3',
    clo4: '1-4',
}, {
    clo1: '2-1',
    clo2: '2-2',
    clo3: '2-3',
    clo4: '2-4',
}, {
    clo1: '3-1',
    clo2: '3-2',
    clo3: '3-3',
    clo4: '3-4',
},]
const headerList = ['表头1', '表头2', '表头3', '表头4']
const defaultInfiniteScrolling = () => {
    return (
        <>
            <InfiniteScrolling
                data={data}
                headerList={headerList}
                headerCorlor='red'
                bodyCorlor='pink'
            ></InfiniteScrolling>
        </>
    );
};

storiesOf("InfiniteScrolling Component", module)
    .add("InfiniteScrolling", defaultInfiniteScrolling)