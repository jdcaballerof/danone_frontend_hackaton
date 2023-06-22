import React from 'react'

import { Button } from 'primereact/Button';
import { Card } from 'primereact/card';
import { Skeleton } from 'primereact/skeleton';
        

export const UserCard = ({name}) => {

    // const header = (
    //     <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    // );
    // const footer = (
    //     <div className="flex flex-wrap justify-content-end gap-2">
    //         <Button label="Save" icon="pi pi-check" />
    //         <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
    //     </div>
    // );

    return <SkeletonCard name={name} />
    // return (
    //     <div className="card flex justify-content-center">
    //         <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
    //             <p className="m-0">
    //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
    //                 numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    //             </p>
    //         </Card>
    //     </div>
    // )
}



const SkeletonCard = ({name}) => {
    return (
        <div className="card">
            <div className="border-round border-1 surface-border p-4 surface-card">
                <div className="flex mb-3">
                    <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                    <div>
                        {
                            !!name ?
                            <p className="mb-2 font-bold"> {name} </p>
                            :<Skeleton width="10rem" className="mb-2"></Skeleton>
                        }
                        <Skeleton width="5rem" className="mb-2"></Skeleton>
                        <Skeleton height=".5rem"></Skeleton>
                    </div>
                </div>
                <Skeleton width="100%" height="150px"></Skeleton>
                <div className="flex justify-content-between mt-3">
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                </div>
            </div>
        </div>
    );
}