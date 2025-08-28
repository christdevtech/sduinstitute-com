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
      title: 'Department of Nursing Sciences',
      slug: 'nursing-sciences',
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
                  text: 'The Department of Nursing Sciences at St. David\'s University Institute is dedicated to providing world-class education in nursing and healthcare. Our programs are designed to meet international standards and prepare students for successful careers with 100% employment opportunities.',
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
                  text: 'We offer comprehensive programs including HND in Nursing Science, HND in Midwifery, Bachelor of Science in Nursing, and Associate Vocational Nurse Certificate, combining theoretical knowledge with practical hands-on experience in well-equipped facilities.',
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
        title: 'Department of Nursing Sciences - St. David\'s University Institute',
        description: 'Leading department offering world-class nursing education with 100% employment opportunities at St. David\'s University Institute.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Department of Biomedical Sciences',
      slug: 'biomedical-sciences',
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
                  text: 'The Department of Biomedical Sciences provides comprehensive education in laboratory technology, pharmacy technology, and medical sciences. Our programs prepare students to become competent healthcare professionals ready to serve in various medical and pharmaceutical settings.',
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
        email: 'biomedical@sduinstitute.com',
        phone: '+237 233 42 63 84',
        office: 'Biomedical Sciences Building, Floor 1',
      },
      meta: {
        title: 'Department of Biomedical Sciences - St. David\'s University Institute',
        description: 'Comprehensive biomedical sciences education program preparing students for successful careers in laboratory technology and pharmacy.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Department of Computer Science',
      slug: 'computer-science',
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
                  text: 'The Department of Computer Science offers cutting-edge education in information technology, software development, and computer systems. Our programs are designed to meet the growing demand for skilled IT professionals in the digital economy.',
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
        email: 'computerscience@sduinstitute.com',
        phone: '+237 233 42 63 85',
        office: 'Computer Science Building, Floor 2',
      },
      meta: {
        title: 'Department of Computer Science - St. David\'s University Institute',
        description: 'Advanced computer science education preparing students for careers in technology and software development.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      title: 'Department of Business Administration',
      slug: 'business-administration',
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
                  text: 'The Department of Business Administration provides comprehensive education in business management, entrepreneurship, and administration. Our programs prepare students for leadership roles in various business sectors and organizations.',
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
        email: 'business@sduinstitute.com',
        phone: '+237 233 42 63 86',
        office: 'Business Administration Building, Floor 1',
      },
      meta: {
        title: 'Department of Business Administration - St. David\'s University Institute',
        description: 'Comprehensive business administration education preparing students for leadership roles in business and management.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
  ]
}