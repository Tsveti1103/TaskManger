import { fireEvent, render, screen } from '@testing-library/react';
import Tasks from './Tasks';
import { BrowserRouter } from 'react-router-dom';
import { TaskContext, TaskProvider } from '../../contexts/TaskContext';

const MockTask = () => {
    let tasks = [{
        description: "asdasd",
        id: 51,
        priority: 0,
        title: "www",
    }]
    const getAllTasks = () => {
        return tasks
    }
    const values = { tasks, getAllTasks }
    return (
        <BrowserRouter>
            <TaskContext.Provider value={values}>
                <Tasks />
            </TaskContext.Provider>
        </BrowserRouter >
    )
}
describe('Task page', () => {
    test('Witoht tasks', () => {
        render(
            <BrowserRouter>
                <TaskProvider>
                    <Tasks />
                </TaskProvider>
            </BrowserRouter >
        );
        const paragraphElement = screen.getByText(/You don't have any tasks yet./i);
        expect(paragraphElement).toBeInTheDocument();
    });
    test('Get add task button', () => {
        render(
            <MockTask />
        );
        const buttonElement = screen.getByTitle(/Add new task/i);
        expect(buttonElement).toBeInTheDocument();
    });
    test('Click add task button', () => {

        render(
            <MockTask />
        );
        const buttonElement = screen.getByTitle(/Add new task/i);
        fireEvent.click(buttonElement);
        const headingElement = screen.getByText(/Create Task/i)
        expect(headingElement).toBeInTheDocument();
    });
    test('with tasks', async () => {
        render(
            <MockTask />
        );

        const headingElement = await screen.findByText(/asdasd/i)
        expect(headingElement).toBeInTheDocument();
    });

    test('Click complete task button', async() => {

        render(
            <MockTask />
        );
        const headingElement = await screen.findByText(/asdasd/i)
        const buttonElement = screen.getByTitle(/Complete task/i);
        expect(headingElement).toBeInTheDocument();
        fireEvent.click(buttonElement);
        const delButtonElement = screen.getByText(/Delete/i)
        expect(delButtonElement).toBeInTheDocument();
    });
})

