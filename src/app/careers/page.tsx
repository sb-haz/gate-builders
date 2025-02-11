"use client"

import { X } from 'lucide-react';
import { useState } from 'react';

interface JobPost {
    title: string;
    type: string;
    location: string;
    salary: string;
    description: string;
    requirements: string[];
}

export default function Careers() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);

    const jobPostings: JobPost[] = [
        {
            title: "Bricklayer",
            type: "Full-time",
            location: "West Midlands",
            salary: "£38,700",
            description: "We are looking for experienced bricklayers to join our growing team. You will be responsible for laying bricks, blocks and other building materials to construct and repair walls, foundations, and other structures.",
            requirements: [
                "Minimum 3-4 years experience in bricklaying or similar construction work",
                "Experience working on residential and commercial projects",
                "Knowledge of construction site safety practices",
                "Reliable and punctual"
            ]
        },
        {
            title: "Bricklayer",
            type: "Full-time",
            location: "West Midlands",
            salary: "£38,700",
            description: "We are seeking bricklayers with proven experience to join our team. The role involves constructing walls, laying blocks, and working on various building projects across the West Midlands area.",
            requirements: [
                "Minimum 3-4 years experience in bricklaying or similar construction work",
                "Experience working on residential and commercial projects",
                "Knowledge of construction site safety practices",
                "Reliable and punctual"
            ]
        },
        {
            title: "Experienced Roofer",
            type: "Full-time",
            location: "West Midlands",
            salary: "£39,950",
            description: "Seeking an experienced roofer for residential and commercial projects. You will handle various roofing jobs including repairs, installations and maintenance.",
            requirements: [
                "Minimum 3 years roofing experience",
                "Experience with different roofing materials and techniques",
                "Valid CSCS card",
                "Working at heights certification",
                "Strong attention to detail"
            ]
        }
    ];

    const openModal = (job: JobPost) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[40vh]">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/70 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3"
                    alt="Careers"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Join Our Team</h1>
                    <p className="text-xl text-white max-w-2xl">
                        Build your career with one of West Midlands leading builders merchants
                    </p>
                </div>
            </div>

            {/* Job Listings */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-12 text-gray-900">Open Positions</h2>
                <div className="grid gap-8">
                    {jobPostings.map((job, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-duration-200">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900">{job.title}</h3>
                                    <div className="flex gap-4 mt-2">
                                        <span className="text-gray-600">{job.type}</span>
                                        <span className="text-gray-600">{job.location}</span>
                                        <span className="text-gray-600">{job.salary}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => openModal(job)}
                                    className="bg-[#f3bf14] text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-[#f3bf14]/90 transition-colors duration-200"
                                >
                                    Apply Now
                                </button>
                            </div>

                            <p className="text-gray-700 mb-6">{job.description}</p>

                            <div>
                                <h4 className="font-semibold mb-3 text-gray-700">Requirements:</h4>
                                <ul className="list-disc pl-5 space-y-2">
                                    {job.requirements.map((req, i) => (
                                        <li key={i} className="text-gray-700">{req}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Application Modal */}
                {isModalOpen && selectedJob && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg max-w-2xl w-full p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    Apply for {selectedJob.title}
                                </h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="mt-4">
                                <div className="mb-6 bg-gray-700 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2 text-white">Position Details</h4>
                                    <div className="flex gap-4 text-gray-300 mb-2">
                                        <span>{selectedJob.type}</span>
                                        <span>{selectedJob.location}</span>
                                        <span>{selectedJob.salary}</span>
                                    </div>
                                    <p className="text-gray-300">{selectedJob.description}</p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-2 text-gray-900">How to Apply</h4>
                                    <p className="text-gray-600">
                                        To apply for this position, please send your application to{' '}
                                        <a href="mailto:info@gatebuildersandmerchants.co.uk" className="text-blue-600 hover:underline">
                                            info@gatebuildersandmerchants.co.uk
                                        </a>
                                    </p>
                                    <div className="mt-4 space-y-2 text-gray-600">
                                        <p>Please include:</p>
                                        <ul className="list-disc pl-5">
                                            <li>Your CV in PDF format</li>
                                            <li>A brief cover letter explaining why you are interested in this role</li>
                                            <li>Subject: {selectedJob.title.toLocaleLowerCase()} application</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 text-gray-600">
                                    <p>We aim to respond to all applications within 48 hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Additional Info Section */}
                <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Why Join Us?</h3>
                    <div className="grid md:grid-cols-3 gap-8 text-gray-800">
                        {[
                            {
                                title: "Career Growth",
                                description: "We invest in our employees development through training and advancement opportunities"
                            },
                            {
                                title: "Competitive Benefits",
                                description: "We offer competitive salaries, pension schemes, and health benefits"
                            },
                            {
                                title: "Great Culture",
                                description: "Join a supportive team environment with regular social events"
                            }
                        ].map((benefit, index) => (
                            <div key={index}>
                                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                                <p className="text-gray-700">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}