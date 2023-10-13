import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import { Appget } from './App';




export default function Dashboard({ auth,lists }) {



    return (
        <AuthenticatedLayout
            user={auth.user}
         
        >
           
            <Head title="Dashboard" />

            <Appget  lists={lists}/>

            

        </AuthenticatedLayout>
    );
}
