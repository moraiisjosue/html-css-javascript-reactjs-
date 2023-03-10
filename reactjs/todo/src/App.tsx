import { useState } from 'react'
import { Item } from './types/Item';
import { ItemList } from './components/ItemList';
import { AddArea } from './components/AddArea';

function App() {
  const [list, setList] = useState<Item[]>([ //cria uma lista
    { id: 1, name: 'Comprar um carro novo', done: false },
    { id: 2, name: 'Ir na Academia', done: true },
  ])

  const handleAddTask = (taskName: string) => { //adiciona mais um item na lista
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList); //atualiza a lista
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <div className="bg-cyan-800 w-full h-screen ">
      <div className='p-6 max-w-sm mx-auto'>
        <h1 className="max-w-sm text-3xl font-bold text-white">
          Lista de Tarefas
        </h1>
      </div>
      <AddArea onEnter={handleAddTask} /> 

      {/* Área para adicionar/mostrar nova tarefa*/}
      {list.map((item, index) => ( //passar por toda a lista
        <ItemList key={index}
          item={item}
          onChange={handleTaskChange} /> //chama a componentização passando o key e o item
      ))}

    </div>
  )
}
export default App
