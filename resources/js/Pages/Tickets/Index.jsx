import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import { MdSubject, MdFactCheck, MdOutlineLowPriority } from "react-icons/md";
import Ticket from '@/Components/Ticket';

export default function Index({ auth, tickets }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
        topic: "",
        type: "",
        priority: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("tickets.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tickets" />

            <div
                className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8"
                style={{ direction: "rtl" }}
            >
                <form onSubmit={submit}>
                    <label
                        htmlFor="input-group-1"
                        className="block mb-2 text-l font-medium text-gray-900 dark:text-black"
                    >
                        موضوع
                    </label>
                    <div className="flex mb-6">
                        <div className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <MdSubject />
                        </div>
                        <input
                            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => setData("topic", e.target.value)}
                            type="text"
                            name="topic"
                            value={data.topic}
                        />
                    </div>
                    <label
                        htmlFor="website-admin"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                        نوع درخواست
                    </label>
                    <div className="flex mb-6">
                        <div className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <MdFactCheck />
                        </div>
                        <input
                            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => setData("type", e.target.value)}
                            type="text"
                            name="type"
                            value={data.type}
                        />
                    </div>

                    <label
                        htmlFor="website-admin"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                        اولویت درخواست
                    </label>
                    <div className="flex mb-6">
                        <div className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <MdOutlineLowPriority />
                        </div>
                        <input
                            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => setData("priority", e.target.value)}
                            type="text"
                            name="priority"
                            value={data.priority}
                        />
                    </div>
                    <label
                        htmlFor="website-admin"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                        شرح درخواست
                    </label>
                    <div className="flex mb-4">
                        <textarea
                            value={data.message}
                            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => setData("message", e.target.value)}
                        ></textarea>
                    </div>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton
                        className="mt-4"
                        disabled={processing}
                        style={{
                            width: "200px",
                            justifyContent: "center",
                        }}
                    >
                        ارسال درخواست
                    </PrimaryButton>
                </form>
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {tickets.map(ticket =>
                        <Ticket key={ticket.id} ticket={ticket} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
