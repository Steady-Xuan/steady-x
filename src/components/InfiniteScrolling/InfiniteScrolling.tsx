
import { useState, useEffect, useRef } from "react"
import React, {
    FC,
} from "react";
interface InfiniteScrollingProps {
    data: Array<any>,
    headerList: Array<any>,
    headerCorlor?: string,
    bodyCorlor?: string,
}
const InfiniteScrolling: FC<InfiniteScrollingProps> = (props) => {
    const { data, headerList, headerCorlor, bodyCorlor } = props
    const timer: any = useRef(null)
    const [header, setHeader] = useState(headerList)
    const [showRow1, setShowRow1] = useState(data)
    const frequencyData = useRef(0)// 移动次数
    const initialization = useRef(0) //判断是否初始化
    const handleStartAnimation = () => {
        frequencyData.current++
        if (frequencyData.current > 6) {
            const dom: any = document.querySelector('.container-box')
            dom.style.transition = 'none'
            dom.style.transform = `translateY(0px)`
            frequencyData.current = 0
        }
        const dom: any = document.querySelector('.container-box')
        if (frequencyData.current === 0) {
            setTimeout(() => {
                dom.style.transition = 'all 0.5s linear'
                dom && (dom.style.transform = `translateY(-${(frequencyData.current + 1) * 50}px)`)
            }, 300)
            initialization.current = frequencyData.current + 2
        }
        if (frequencyData.current !== 0) {
            if (initialization.current) {
                frequencyData.current = initialization.current
                initialization.current = 0
            }
            dom.style.transition = 'all 0.5s linear'
            dom && (dom.style.transform = `translateY(-${frequencyData.current * 50}px)`)
        }

    }
    useEffect(() => {
        timer.current = setInterval(() => {
            handleStartAnimation()
        }, 2000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    useEffect(() => {
        const domHeader: HTMLDivElement | null = document.querySelector(".header")
        const domBody: HTMLDivElement | null = document.querySelector(".body")
        if (headerCorlor && domHeader) {
            domHeader.style.backgroundColor = headerCorlor
        }
        if (bodyCorlor && domBody) {
            domBody.style.backgroundColor = bodyCorlor
        }
    }, [])
    return (
        <div className="container">
            <div className="header">
                {
                    header.map(item => {
                        return <div key={Math.random()}>{item}</div>
                    })
                }
            </div>
            <div className="body">
                <div className="container-box">
                    {
                        showRow1.map((item1: any, index) => {
                            return (<div className={`row row${index}`} key={Math.random()}>
                                {Object.keys(item1).map(item2 => {
                                    return <div className="col" key={Math.random()}>{item1[item2]}</div>

                                })}
                            </div>)
                        })
                    }
                </div>

            </div>
        </div>)
}
export default InfiniteScrolling