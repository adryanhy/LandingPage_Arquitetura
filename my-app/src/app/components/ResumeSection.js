export default function ResumeSection(){
    
    const experiences = [
        { year: '2015-2017', title: 'Arquiteta Junior', company: 'Studio X' },
        { year: '2017-2019', title: 'Arquiteta Pleno', company: 'Design & Co.' },
        { year: '2019-Presente', title: 'Arquiteta Sênior', company: 'Creative Architects' },
    ];


    return (
        <div className="p-8 bg-gray-100">
            <h2 className="text-3x1 font-bold text-center mb-4">Experiências Profissionais</h2>
            <div className="space-y-4">
                {experiences.map((exp, index) =>(
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}