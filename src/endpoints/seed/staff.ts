import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type StaffArgs = {
  featuredImage: Media
  metaImage: Media
  nursingDepartment: any
  biomedicalDepartment: any
}

export const staff: (args: StaffArgs) => RequiredDataFromCollectionSlug<'staff'>[] = ({
  featuredImage,
  metaImage,
  nursingDepartment,
  biomedicalDepartment,
}) => {
  return [
    {
      name: 'Dr. Sarah Mbah',
      fullName: 'Dr. Sarah Mbah',
      slug: 'dr-sarah-mbah',
      position: 'Dean of Nursing',
      department: nursingDepartment.id,
      email: 'sarah.mbah@sduinstitute.com',
      phone: '+237 677 123 456',
      bio: {
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
                  text: 'Dr. Sarah Mbah is a distinguished nursing educator with over 15 years of experience in clinical practice and academic leadership. She holds a PhD in Nursing from the University of Buea and has published extensively in peer-reviewed journals on maternal health and nursing education.',
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
      qualifications: [
        { qualification: 'PhD in Nursing - University of Buea' },
        { qualification: 'MSc in Public Health - University of Dschang' },
        { qualification: 'BSc in Nursing - Catholic University of Cameroon' },
      ],
      specializations: [
        { specialization: 'Maternal and Child Health' },
        { specialization: 'Nursing Education' },
        { specialization: 'Healthcare Management' },
      ],
      photo: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'Dr. Sarah Mbah - Dean of Nursing',
        description: 'Dr. Sarah Mbah serves as Dean of Nursing at SDU Institute, bringing extensive experience in nursing education and clinical practice.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      name: 'Prof. Jean-Claude Fotso',
      fullName: 'Prof. Jean-Claude Fotso',
      slug: 'prof-jean-claude-fotso',
      position: 'Head of Laboratory Technology',
      department: biomedicalDepartment.id,
      email: 'jc.fotso@sduinstitute.com',
      phone: '+237 677 234 567',
      bio: {
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
                  text: 'Professor Jean-Claude Fotso is a renowned biomedical scientist with over 20 years of experience in laboratory medicine and diagnostics. He leads our Laboratory Technology program and has been instrumental in establishing state-of-the-art laboratory facilities at SDU Institute.',
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
      qualifications: [
        { qualification: 'PhD in Biomedical Sciences - University of Bamenda' },
        { qualification: 'MSc in Clinical Laboratory Science - University of Dschang' },
        { qualification: 'BSc in Medical Laboratory Technology - University of Buea' },
      ],
      specializations: [
        { specialization: 'Clinical Biochemistry' },
        { specialization: 'Medical Microbiology' },
        { specialization: 'Laboratory Quality Management' },
      ],
      photo: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'Prof. Jean-Claude Fotso - Head of Laboratory Technology',
        description: 'Professor Jean-Claude Fotso leads the Laboratory Technology program at SDU Institute with extensive expertise in biomedical sciences.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      name: 'Dr. Marie Nkomo',
      fullName: 'Dr. Marie Nkomo',
      slug: 'dr-marie-nkomo',
      position: 'Senior Lecturer in Midwifery',
      department: nursingDepartment.id,
      email: 'marie.nkomo@sduinstitute.com',
      phone: '+237 677 345 678',
      bio: {
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
                  text: 'Dr. Marie Nkomo is a certified midwife and educator with extensive experience in maternal and neonatal care. She has worked in various healthcare settings across Cameroon and brings practical expertise to our midwifery program.',
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
      qualifications: [
        { qualification: 'PhD in Midwifery - University of Maroua' },
        { qualification: 'MSc in Reproductive Health - Catholic University of Cameroon' },
        { qualification: 'Diploma in Midwifery - Cameroon Nursing Council' },
      ],
      specializations: [
        { specialization: 'Obstetrics and Gynecology' },
        { specialization: 'Neonatal Care' },
        { specialization: 'Family Planning' },
      ],
      photo: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'Dr. Marie Nkomo - Senior Lecturer in Midwifery',
        description: 'Dr. Marie Nkomo is a senior lecturer specializing in midwifery and maternal health at SDU Institute.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      name: 'Mr. Paul Tabi',
      fullName: 'Mr. Paul Tabi',
      slug: 'mr-paul-tabi',
      position: 'Registrar',
      department: null,
      email: 'paul.tabi@sduinstitute.com',
      phone: '+237 677 456 789',
      bio: {
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
                  text: 'Mr. Paul Tabi serves as the Registrar of SDU Institute, overseeing student admissions, academic records, and institutional compliance. With over 12 years of experience in higher education administration, he ensures smooth academic operations.',
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
      qualifications: [
        { qualification: 'MBA in Educational Management - University of Ngaoundéré' },
        { qualification: 'BSc in Administration - University of Bamenda' },
        { qualification: 'Diploma in Records Management - CAMTEL Institute' },
      ],
      specializations: [
        { specialization: 'Academic Administration' },
        { specialization: 'Student Services' },
        { specialization: 'Quality Assurance' },
      ],
      photo: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'Mr. Paul Tabi - Registrar',
        description: 'Mr. Paul Tabi serves as Registrar at SDU Institute, managing academic administration and student services.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      name: 'Mrs. Grace Fon',
      fullName: 'Mrs. Grace Fon',
      slug: 'mrs-grace-fon',
      position: 'Director of Student Affairs',
      department: null,
      email: 'grace.fon@sduinstitute.com',
      phone: '+237 677 567 890',
      bio: {
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
                  text: 'Mrs. Grace Fon is responsible for student welfare, counseling services, and extracurricular activities at SDU Institute. She is passionate about student development and creating a supportive learning environment.',
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
      qualifications: [
        { qualification: 'MSc in Counseling Psychology - University of Dschang' },
        { qualification: 'BSc in Psychology - University of Buea' },
        { qualification: 'Certificate in Student Affairs Management - USAID' },
      ],
      specializations: [
        { specialization: 'Student Counseling' },
        { specialization: 'Career Guidance' },
        { specialization: 'Student Development' },
      ],
      photo: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'Mrs. Grace Fon - Director of Student Affairs',
        description: 'Mrs. Grace Fon oversees student affairs and welfare services at SDU Institute.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
    {
      name: 'Dr. Emmanuel Njie',
      fullName: 'Dr. Emmanuel Njie',
      slug: 'dr-emmanuel-njie',
      position: 'Lecturer in Clinical Practice',
      department: nursingDepartment.id,
      email: 'emmanuel.njie@sduinstitute.com',
      phone: '+237 677 678 901',
      bio: {
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
                  text: 'Dr. Emmanuel Njie combines clinical practice with academic teaching, bringing real-world healthcare experience to the classroom. He currently practices at Douala General Hospital while teaching clinical nursing courses.',
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
      qualifications: [
        { qualification: 'MD - University of Buea' },
        { qualification: 'MSc in Nursing - Catholic University of Cameroon' },
        { qualification: 'BSc in Nursing - University of Bamenda' },
      ],
      specializations: [
        { specialization: 'Emergency Medicine' },
        { specialization: 'Critical Care Nursing' },
        { specialization: 'Clinical Skills Training' },
      ],
      photo: featuredImage.id,
      _status: 'published',
      meta: {
        title: 'Dr. Emmanuel Njie - Lecturer in Clinical Practice',
        description: 'Dr. Emmanuel Njie teaches clinical nursing practice at SDU Institute while maintaining active medical practice.',
        image: metaImage.id,
      },
      publishedAt: new Date().toISOString(),
    },
  ]
}