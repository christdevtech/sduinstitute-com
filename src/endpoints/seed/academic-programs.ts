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
    // English Programs - HND
    {
      title: 'HND in General Nursing',
      slug: 'hnd-general-nursing',
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
                      text: 'GCE O/L with 5 credits including English and Mathematics',
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
                      text: 'GCE A/L with at least 2 passes',
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
                  text: 'Comprehensive nursing education covering anatomy, physiology, pharmacology, patient care, and clinical practice.',
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
                  text: 'Graduates can work as registered nurses in hospitals, clinics, community health centers, and private healthcare facilities.',
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
        local: '325,000 FCFA per year',
        international: '$1,200 per year',
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
        {
          intakeDate: '2025-03-01',
          label: 'March 2025',
        },
      ],
      meta: {
        title: 'HND in General Nursing - SDU Institute',
        description: 'Comprehensive 3-year Higher National Diploma program in General Nursing at SDU Institute. Prepare for a rewarding career in healthcare.',
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
                      text: 'GCE O/L with 5 credits including English and Mathematics',
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
                      text: 'GCE A/L with at least 2 passes',
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
                  text: 'Specialized training in maternal and child health, obstetrics, gynecology, and neonatal care.',
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
                  text: 'Career opportunities in maternity wards, birthing centers, family planning clinics, and community health programs.',
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
        local: '300,000 FCFA per year',
        international: '$1,100 per year',
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
        title: 'HND in Midwifery - SDU Institute',
        description: 'Specialized 3-year Higher National Diploma program in Midwifery. Train to become a skilled midwife at SDU Institute.',
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
                      text: 'GCE O/L with 5 credits including English, Mathematics, and Science subjects',
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
                      text: 'GCE A/L with passes in Science subjects',
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
                  text: 'Comprehensive training in clinical laboratory procedures, medical diagnostics, and laboratory management.',
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
                  text: 'Employment opportunities in hospital laboratories, diagnostic centers, research institutions, and pharmaceutical companies.',
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
        local: '260,000 FCFA per year',
        international: '$950 per year',
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
        title: 'HND in Laboratory Technology - SDU Institute',
        description: 'Advanced 3-year program in Laboratory Technology. Master medical diagnostics and laboratory procedures at SDU Institute.',
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
                      text: 'GCE A/L with at least 2 passes in Science subjects',
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
                      text: 'HND in Nursing with good grades',
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
                  text: 'Advanced nursing education with emphasis on leadership, research, and evidence-based practice in healthcare.',
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
                  text: 'Leadership roles in nursing, healthcare management, clinical supervision, and opportunities for further postgraduate studies.',
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
        local: '400,000 FCFA per year',
        international: '$1,500 per year',
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
        title: 'Bachelor of Science in Nursing - SDU Institute',
        description: 'Comprehensive 4-year Bachelor degree program in Nursing. Advance your nursing career with SDU Institute.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
  ]
}