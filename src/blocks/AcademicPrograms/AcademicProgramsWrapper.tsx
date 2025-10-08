'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { AcademicProgram, Department } from '@/payload-types'
import { AcademicProgramsClient } from './AcademicProgramsClient'

interface AcademicProgramsWrapperProps {
  id?: string
  initialPrograms: AcademicProgram[]
  departments: Department[]
  showFilters: boolean
  showSearch: boolean
  showApplicationCTA: boolean
  itemsPerPage: number
}

export const AcademicProgramsWrapper: React.FC<AcademicProgramsWrapperProps> = ({
  id,
  initialPrograms,
  departments,
  showFilters,
  showSearch,
  showApplicationCTA,
  itemsPerPage,
}) => {
  return (
    <div className="container my-16" id={`block-${id}`}>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="text-3xl font-bold mb-4">Academic Programs</h2>
        <p className="text-muted-foreground">
          Explore our comprehensive range of academic programs designed to prepare you for success.
        </p>
      </motion.div>

      <div>
        <AcademicProgramsClient
          initialPrograms={initialPrograms}
          departments={departments}
          showFilters={showFilters}
          showSearch={showSearch}
          showApplicationCTA={showApplicationCTA}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  )
}
