import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import AcademicCalendarBlock from '@/blocks/AcademicCalendar/Component'
import { AcademicProgramsBlock } from '@/blocks/AcademicPrograms/Component'
import  AdmissionsInfoBlock from '@/blocks/AdmissionsInfo/Component'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { DepartmentOverviewBlock } from '@/blocks/DepartmentOverview/Component'
import {EventsCalendarBlock} from '@/blocks/EventsCalendar/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { ImageTextBlock } from '@/blocks/ImageText/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { MentorUniversitiesBlockComponent } from '@/blocks/MentorUniversities/Component'
import ProgramPathwayBlock from '@/blocks/ProgramPathway/Component'
import { UniversityOrganigramBlock } from '@/blocks/UniversityOrganigram/Component'

const blockComponents = {
  academicCalendar: AcademicCalendarBlock,
  academicPrograms: AcademicProgramsBlock,
  admissionsInfo: AdmissionsInfoBlock,
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  departmentOverview: DepartmentOverviewBlock,
  eventsCalendar: EventsCalendarBlock,
  formBlock: FormBlock,
  imageText: ImageTextBlock,
  mediaBlock: MediaBlock,
  mentorUniversities: MentorUniversitiesBlockComponent,
  programPathway: ProgramPathwayBlock,
  universityOrganigram: UniversityOrganigramBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
