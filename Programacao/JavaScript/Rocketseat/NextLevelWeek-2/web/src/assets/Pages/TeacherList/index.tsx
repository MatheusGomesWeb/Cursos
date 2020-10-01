import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../../services/api';

function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">

            <PageHeader title="Estes são os proffys disponíveis.">

                <form id="search-teachers" onSubmit={searchTeachers}>

                    <Select
                        name="subject"
                        value={subject}
                        label="Matéria"
                        onChange={e => { setSubject((e).target.value) }}
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Matematica", label: "Matematica" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Informática", label: "Informática" },
                            { value: "Portugues", label: "Portugues" },
                            { value: "Fisica", label: "Fisica" }
                        ]}
                    />

                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        onChange={e => { setWeek_day((e).target.value) }}
                        value={week_day}
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-Feira" },
                            { value: "2", label: "Terça-Feira" },
                            { value: "3", label: "Quarta-Feira" },
                            { value: "4", label: "Quinta-Feira" },
                            { value: "5", label: "Sexta-Feira" }
                        ]}
                    />

                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={e => { setTime(e.target.value) }}

                    />

                    <button type="submit">Buscar</button>

                </form>

            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>

        </div>
    );
}

export default TeacherList;