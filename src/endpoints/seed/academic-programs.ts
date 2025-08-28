import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type AcademicProgramsArgs = {
  featuredImage: Media
  metaImage: Media
  nursingDepartment: any
  biomedicalDepartment: any
}

export const academicPrograms: (args: AcademicProgramsArgs) => RequiredDataFromCollectionSlug<'academic-programs'>[] = ({
  featuredImage,
  metaImage,
  nursingDepartment,
  biomedicalDepartment,
}) => {
  return [
    // English Programs - HND (3 Years)
    {
      title: 'HND in Nursing Science',
      slug: 'hnd-nursing-science',
      programType: 'HND',
      department: nursingDepartment.id,
      duration: '3 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'GCE A/L or BAC (Baccalauréat)',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 1,
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Registration fee: 25,000 XAF',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 2,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              listType: 'bullet',
              start: 1,
              tag: 'ul',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      curriculumOverview: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Comprehensive 3-year nursing education program covering anatomy, physiology, pharmacology, patient care, and clinical practice. Includes 2.5 months of lectures and 2.5 months of internship per semester with experienced lecturers from state universities and regional hospitals.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      careerProspects: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Graduates can work as registered nurses in hospitals, clinics, community health centers, and private healthcare facilities. 100% employment opportunities available both in Cameroon and internationally with license and visa assistance provided.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      tuitionFees: {
        local: '325,000 XAF per year',
        international: '325,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: 'HND in Nursing Science - St. David\'s University Institute',
        description: 'Comprehensive 3-year Higher National Diploma program in Nursing Science at St. David\'s University Institute. Prepare for a rewarding career in healthcare with 100% employment opportunities.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'HND in Midwifery',
      slug: 'hnd-midwifery',
      programType: 'HND',
      department: nursingDepartment.id,
      duration: '3 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'GCE A/L or BAC (Baccalauréat)',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 1,
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Registration fee: 25,000 XAF',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 2,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              listType: 'bullet',
              start: 1,
              tag: 'ul',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      curriculumOverview: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Specialized 3-year training in maternal and child health, obstetrics, gynecology, and neonatal care. Program includes comprehensive practical training with 2.5 months of lectures and 2.5 months of internship per semester.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      careerProspects: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Career opportunities in maternity wards, birthing centers, family planning clinics, and community health programs. 100% employment opportunities with international licensing and visa assistance.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      tuitionFees: {
        local: '325,000 XAF per year',
        international: '325,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: 'HND in Midwifery - St. David\'s University Institute',
        description: 'Specialized 3-year Higher National Diploma program in Midwifery. Train to become a skilled midwife at St. David\'s University Institute with 100% employment opportunities.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'HND in Laboratory Technology',
      slug: 'hnd-laboratory-technology',
      programType: 'HND',
      department: biomedicalDepartment.id,
      duration: '3 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'GCE A/L or BAC (Baccalauréat)',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 1,
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Registration fee: 25,000 XAF',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 2,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              listType: 'bullet',
              start: 1,
              tag: 'ul',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      curriculumOverview: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Comprehensive 3-year training in clinical laboratory procedures, medical diagnostics, and laboratory management. Program includes well-equipped practical halls and 2.5 months of lectures with 2.5 months of internship per semester.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      careerProspects: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Employment opportunities in hospital laboratories, diagnostic centers, research institutions, and pharmaceutical companies. 100% employment opportunities with international licensing and visa assistance.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      tuitionFees: {
        local: '325,000 XAF per year',
        international: '325,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: 'HND in Laboratory Technology - St. David\'s University Institute',
        description: 'Advanced 3-year program in Laboratory Technology. Master medical diagnostics and laboratory procedures at St. David\'s University Institute with 100% employment opportunities.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'HND in Pharmacy Technology',
      slug: 'hnd-pharmacy-technology',
      programType: 'HND',
      department: biomedicalDepartment.id,
      duration: '3 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'GCE A/L or BAC (Baccalauréat)',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 1,
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Registration fee: 25,000 XAF',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 2,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              listType: 'bullet',
              start: 1,
              tag: 'ul',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      curriculumOverview: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Comprehensive 3-year training in pharmaceutical sciences, drug preparation, dispensing, and pharmacy management. Program includes well-equipped practical halls and 2.5 months of lectures with 2.5 months of internship per semester.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      careerProspects: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Employment opportunities in community pharmacies, hospital pharmacies, pharmaceutical companies, and drug regulatory agencies. 100% employment opportunities with international licensing and visa assistance.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      tuitionFees: {
        local: '325,000 XAF per year',
        international: '325,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: 'HND in Pharmacy Technology - St. David\'s University Institute',
        description: 'Comprehensive 3-year program in Pharmacy Technology. Master pharmaceutical sciences and pharmacy management at St. David\'s University Institute with 100% employment opportunities.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    // 2-Year HND Programs
    {
      title: '2-Year HND in Nursing Science',
      slug: '2-year-hnd-nursing-science',
      programType: 'HND',
      department: nursingDepartment.id,
      duration: '2 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'GCE B.E.P.C or O/L',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 1,
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Registration fee: 25,000 XAF',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 2,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              listType: 'bullet',
              start: 1,
              tag: 'ul',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      curriculumOverview: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Accelerated 2-year nursing program for State Enrolled Nurse qualification. Comprehensive training in nursing fundamentals, patient care, and clinical practice with 2.5 months of lectures and 2.5 months of internship per semester.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      careerProspects: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Career opportunities as State Enrolled Nurse in hospitals, clinics, community health centers, and private healthcare facilities. 100% employment opportunities with international licensing and visa assistance.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      tuitionFees: {
        local: '300,000 XAF per year',
        international: '300,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: '2-Year HND in Nursing Science - St. David\'s University Institute',
        description: 'Accelerated 2-year HND program for State Enrolled Nurse qualification at St. David\'s University Institute with 100% employment opportunities.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    // Certificate Programs
    {
      title: 'Associate Vocational Nurse Certificate',
      slug: 'associate-vocational-nurse-certificate',
      programType: 'Basic',
      department: nursingDepartment.id,
      duration: '1 year',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'F.S.L.C or C.E.P',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 1,
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Registration fee: 25,000 XAF',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 2,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              listType: 'bullet',
              start: 1,
              tag: 'ul',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      curriculumOverview: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Intensive 1-year vocational nursing program covering basic nursing skills, patient care fundamentals, and clinical practice. Program includes practical training and internship opportunities.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      careerProspects: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Entry-level nursing positions in healthcare facilities, nursing homes, and community health centers. Pathway to further nursing education and career advancement.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      tuitionFees: {
        local: '260,000 XAF per year',
        international: '260,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: 'Associate Vocational Nurse Certificate - St. David\'s University Institute',
        description: 'Intensive 1-year vocational nursing certificate program at St. David\'s University Institute. Start your nursing career with practical training.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    // Bachelor's Degree Programs
    {
      title: 'Bachelor of Science in Nursing',
      slug: 'bsc-nursing',
      programType: 'Degree-Direct',
      department: nursingDepartment.id,
      duration: '4 years',
      _status: 'published',
      featuredImage: featuredImage.id,
      entryRequirements: {
        root: {
          type: 'root',
          children: [
            {
              type: 'list',
              children: [
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'GCE A/L or BAC (Baccalauréat)',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 1,
                },
                {
                  type: 'listitem',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Registration fee: 25,000 XAF',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                  value: 2,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              listType: 'bullet',
              start: 1,
              tag: 'ul',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      curriculumOverview: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Comprehensive 4-year degree program in nursing science with advanced clinical training, research methodology, and leadership development. Program includes well-equipped practical halls and 2.5 months of lectures with 2.5 months of internship per semester.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      careerProspects: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Career opportunities as Registered Nurse in hospitals, healthcare institutions, research facilities, and nursing education. 100% employment opportunities with international licensing and visa assistance.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      tuitionFees: {
        local: '350,000 XAF per year',
        international: '350,000 XAF per year',
      },
      intakePeriods: [
        {
          intakeDate: '2024-09-01',
          label: 'September 2024',
        },
        {
          intakeDate: '2025-01-15',
          label: 'January 2025',
        },
      ],
      meta: {
        title: 'Bachelor of Science in Nursing - St. David\'s University Institute',
        description: 'Comprehensive 4-year Bachelor of Science in Nursing program at St. David\'s University Institute with 100% employment opportunities.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
  ]
}