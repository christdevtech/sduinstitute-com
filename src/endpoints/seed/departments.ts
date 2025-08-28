import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type DepartmentsArgs = {
  featuredImage: Media
  metaImage: Media
}

export const departments: (args: DepartmentsArgs) => RequiredDataFromCollectionSlug<'departments'>[] = ({
  featuredImage,
  metaImage,
}) => {
  return [
    {
      title: 'Institute of Nursing and Biomedical Sciences',
      slug: 'nursing-biomedical-sciences',
      description: {
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
                  text: 'The Institute of Nursing and Biomedical Sciences is dedicated to providing world-class education in healthcare and medical sciences. Our programs are designed to meet international standards and prepare students for successful careers in the healthcare industry.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'We offer comprehensive programs in General Nursing, Midwifery, and Laboratory Technology, combining theoretical knowledge with practical hands-on experience in state-of-the-art facilities.',
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
      featuredImage: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'Institute of Nursing and Biomedical Sciences - SDU Institute',
        description: 'Leading department offering world-class education in nursing, midwifery, and laboratory technology at SDU Institute.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Department of General Nursing',
      slug: 'general-nursing',
      description: {
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
                  text: 'The Department of General Nursing provides comprehensive education in fundamental nursing principles, patient care, and healthcare management. Our program prepares students to become competent and compassionate nurses ready to serve in various healthcare settings.',
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
      featuredImage: featuredImage.id,
      _status: 'published',
      contactInfo: {
        email: 'nursing@sduinstitute.com',
        phone: '+237 233 42 63 84',
        office: 'Building A, Floor 2',
      },
      meta: {
        title: 'Department of General Nursing - SDU Institute',
        description: 'Comprehensive nursing education program preparing students for successful careers in healthcare.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Department of Midwifery',
      slug: 'midwifery',
      description: {
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
                  text: 'The Department of Midwifery specializes in maternal and newborn care, providing students with essential skills in prenatal, delivery, and postnatal care. Our program emphasizes evidence-based practice and cultural sensitivity in maternal healthcare.',
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
      featuredImage: featuredImage.id,
      _status: 'published',
      contactInfo: {
        email: 'midwifery@sduinstitute.com',
        phone: '+237 233 42 63 85',
        office: 'Building B, Floor 1',
      },
      meta: {
        title: 'Department of Midwifery - SDU Institute',
        description: 'Specialized midwifery education focusing on maternal and newborn care excellence.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Department of Laboratory Technology',
      slug: 'laboratory-technology',
      description: {
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
                  text: 'The Department of Laboratory Technology trains students in medical laboratory sciences, diagnostic procedures, and laboratory management. Our state-of-the-art laboratories provide hands-on experience with modern diagnostic equipment and techniques.',
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
      featuredImage: featuredImage.id,
      _status: 'published',
      contactInfo: {
        email: 'labtech@sduinstitute.com',
        phone: '+237 233 42 63 86',
        office: 'Building C, Floor 1',
      },
      meta: {
        title: 'Department of Laboratory Technology - SDU Institute',
        description: 'Advanced laboratory technology education with modern diagnostic training facilities.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
  ]
}