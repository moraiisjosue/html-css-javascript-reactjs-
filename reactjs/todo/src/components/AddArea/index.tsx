import { useState, KeyboardEvent } from "react";

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {

    const [inputText, setImputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setImputText('');
        }
    }

    return (
        <div className="flex mb-8 mx-12 gap-2 items-center">
                <div className="image">➕</div>
                <input className="bg-gray-30 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    type="text"
                    placeholder="Adicione uma tarefa"
                    value={inputText}
                    onChange={e => setImputText(e.target.value)}
                    onKeyUp={handleKeyUp}
                />
        </div>
    );
}