'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: {
        scale: 1.05,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },


};

type TechCardProps = {
    title: string;
    description: string;
    href: string;
    subtitle?: string;
};

const TechCard = ({ title, description, href, subtitle }: TechCardProps) => {
    return (
        <motion.div initial="hidden" animate="visible" whileHover='hover' variants={variants}>
            <Link href={href} >
                <Card>
                    <CardContent>
                        <CardTitle className='py-4'>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
};

export default TechCard;
