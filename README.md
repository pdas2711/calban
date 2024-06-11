# Calban Board

A self-hosted kanban board written for Node/React with integration to CalDav servers. Calban is designed to self-host its data or use an existing CalDav server to integrate calendar features to extend the features of calendar-organized workflows with the addition of a kanban board. It is a way to visualize tasks in a CalDav server as a kanban board.

## Key Features

- Self-hosted. No reliance on someone else’s computer.
- Private. If you have projects that have protected/private IP, you do not want to store such workflows in another company’s data center. You can only trust your own so what’s better than hosting the service yourself.
- Integration. Calban Board has an optional feature to integrate with your existing CalDav server. If you want to import your project board into your existing calendar workflow or you have team members that prefer a calendar over a kanban board, you can bring the best of both worlds together.

## Functionality

1. With host-only mode, Calban will store its data in a database. The owner of a project board can create different columns to represent different stages of a task. The owner can also add team members for group collaboration.
2. With network mode, Calban will connect to an existing CalDav server and create a calendar (or a calendar has to be pre-created depending on the server) as a project board. Tasks for the project board will be created as todo lists on the calendar and the stages of the tasks will be stored as progress meters on the todo lists. Calban will interpret these progress meters as different stages of a task when reading from the CalDav server. Members can be added with the administrator of the CalDav server creating an account (or through some self-registration process, depending on the server) and the owner of the calendar giving them access to the calendar for group collaboration.

## Dependencies

This project, in its current state, depends on [Radicale](https://github.com/Kozea/Radicale) and it will work around its limitations. The goal is that if Radicale can be used with the project then other more advanced CalDav servers can as well. Radicale is also simpler to set up that works, pretty much, out of the box.
