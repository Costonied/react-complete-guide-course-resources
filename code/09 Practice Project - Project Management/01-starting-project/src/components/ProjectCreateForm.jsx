import {useState} from "react";
import { useRef } from 'react';

import Modal from './Modal.jsx';

export default function ProjectCreateForm({onAddProject, onCancel}) {

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleButtonSaveClicked() {

        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (
            enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    function handleButtonCancel() {
        onCancel();
    }

    return (
        <form className="max-w-7xl mx-auto mt-10 p-8">
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">
                    Oops ... looks like you forgot to enter a value.
                </p>
                <p className="text-stone-600 mb-4">
                    Please make sure you provide a valid value for every input field.
                </p>
            </Modal>
            <div className="flex justify-end items-center mb-6">
                <button type="button"
                        onClick={handleButtonCancel}
                        className="text-gray-700 mr-2 hover:underline">Cancel</button>
                <button type="button"
                        onClick={handleButtonSaveClicked}
                        className="bg-black text-white px-6 py-2 rounded shadow-none hover:bg-gray-800 transition">Save
                </button>
            </div>
            <div className="mb-4">
                <label className="block text-xs font-bold mb-1 text-gray-700 uppercase" htmlFor="title">
                    Title
                </label>
                <input
                    id="title"
                    ref={title}
                    type="text"
                    className="w-full px-3 py-2 border-none rounded bg-gray-200 focus:outline-none focus:bg-gray-300 text-gray-800"
                />
            </div>
            <div className="mb-4">
                <label className="block text-xs font-bold mb-1 text-gray-700 uppercase" htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    ref={description}
                    rows={3}
                    className="w-full px-3 py-2 border-none rounded bg-gray-200 focus:outline-none focus:bg-gray-300 text-gray-800"
                />
            </div>
            <div className="mb-2">
                <label className="block text-xs font-bold mb-1 text-gray-700 uppercase" htmlFor="dueDate">
                    Due Date
                </label>
                <div className="relative">
                    <input
                        id="dueDate"
                        ref={dueDate}
                        type="date"
                        placeholder="dd.mm.yyyy"
                        className="w-full px-3 py-2 border-none rounded bg-gray-200 focus:outline-none focus:bg-gray-300 text-gray-800 pr-10"
                    />
                </div>
            </div>
        </form>
    );
}