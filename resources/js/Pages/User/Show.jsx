import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { useForm, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


export default function Welcome({ user, header, children,auth }) {
  return (
 
<AuthenticatedLayout user={auth.user}>  
<div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            hi  {user.name}
                            <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>
                        </div>
      
</AuthenticatedLayout>

  )
}