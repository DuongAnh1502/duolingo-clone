import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    return (
        <div className='p-4 '>
            <Button>Default</Button>
            <Button variant='primary'>Primary</Button>
            <Button variant='primaryOutline'>Primary Outline</Button>

            <Button variant='secondary'>Secondary</Button>
            <Button variant='secondaryOutline'>Secondary Outline</Button>

            <Button variant='danger'>Danger</Button>
            <Button variant='dangerOutline'>Danger Outline</Button>

            <Button variant='super'>Super</Button>
            <Button variant='superOutline'>Super Outline</Button>

            <Button variant='ghost'>Ghost</Button>

            <Button variant='sideBar'>SideBar</Button>
            <Button variant='sideBarOutline'>SideBar Outline</Button>
        </div>
    );
}
