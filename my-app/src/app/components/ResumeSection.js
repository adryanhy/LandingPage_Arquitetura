export default function ResumeSection() {
    const experiences = [
        { 
            year: '2015-2017', 
            title: 'Arquiteta Junior', 
            company: 'Studio X', 
            image: './images/icone-de-perfil.png'
        },
        { 
            year: '2017-2019', 
            title: 'Arquiteta Pleno', 
            company: 'Design & Co.', 
            image: './images/icone-de-perfil.png'
        },
        { 
            year: '2019-Presente', 
            title: 'Arquiteta Sênior', 
            company: 'Creative Architects', 
            image: './images/icone-de-perfil.png'
        },
    ];

    return (
        <div className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-700">Experiências</h2>
            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
                        {/* Exibindo a imagem */}
                        {exp.image && (
                            <img 
                                src={exp.image} 
                                alt={`${exp.company} logo`} 
                                className="w-16 h-16 rounded-full mr-4"
                            />
                        )}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                            <p className="text-gray-600">{exp.company}</p>
                            <p className="text-sm text-gray-500">{exp.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}