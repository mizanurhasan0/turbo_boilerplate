import { calculatePageNumber } from '@/lib/Helper';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

type Props = {
    totalPages: number;
    currentPage: number;
    pageNeighbors?: number;
    className?: string
}

export default function Pagination({ totalPages, currentPage, pageNeighbors = 2, className }: Props) {
    const pageNumbers = calculatePageNumber({
        pageNeighbors,
        currentPage,
        totalPages,
    });
    return (
        <div className={"flex items-center justify-center gap-2 py-10"}>
            {/* pervious page button */}
            {currentPage !== 1 && (
                <button className={"rounded-md bg-slate-200 py-2 px-2"}>
                    <Link href={`?page=${currentPage - 1}`}>
                        <ArrowLeft />
                    </Link>
                </button>
            )}

            {pageNumbers.map((page, index) => (
                <button
                    key={index}
                    className={"px-3 py-1 rounded-md transition hover:text-sky-600"}
                >
                    {page === "..." ? "..." : <Link href={`?page=${page}`}>{page}</Link>}
                </button>
            ))}
            {/* next page button */}
            {currentPage !== totalPages && (
                <button className="rounded-md bg-slate-200 py-2 px-2">
                    <Link href={`?page=${currentPage + 1}`}>
                        <ArrowRight />
                    </Link>
                </button>
            )}
        </div>
    );
}
