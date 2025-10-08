import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { AcademicProgramCard } from '@/components/AcademicProgramCard'
import PageClient from './page.client'
import type { Department, Staff, AcademicProgram } from '@/payload-types'
import Link from 'next/link'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const departments = await payload.find({
    collection: 'departments',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
  })

  const department = departments.docs[0]

  if (!department) {
    notFound()
  }

  const {
    title,
    description,
    featuredImage,
    contactInfo,
    headOfDepartment,
    programs,
    staffMembers,
  } = department

  return (
    <>
      <PageClient />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          {featuredImage && typeof featuredImage === 'object' && (
            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <Media resource={featuredImage} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>

            {description && (
              <div className="text-lg text-muted-foreground mb-8">
                <RichText data={description} enableGutter={false} />
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Academic Programs */}
            {programs && Array.isArray(programs) && programs.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Academic Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {programs.map((program) => {
                    if (typeof program === 'string') return null

                    return (
                      <AcademicProgramCard
                        key={program.id}
                        program={{
                          slug: program.slug,
                          id: program.id,
                          title: program.title,
                          programType: program.programType,
                          department: program.department,
                          duration: program.duration,
                          featuredImage: program.featuredImage,
                          curriculumOverview: program.curriculumOverview,
                          tuitionFees: program.tuitionFees,
                        }}
                      />
                    )
                  })}
                </div>
              </section>
            )}

            {/* Staff Members */}
            {staffMembers && Array.isArray(staffMembers) && staffMembers.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Faculty & Staff</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {staffMembers.map((staff) => {
                    if (typeof staff === 'string') return null

                    return (
                      <div key={staff.id} className="bg-card border border-border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          {staff.profileImage && typeof staff.profileImage === 'object' && (
                            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                              <Media
                                resource={staff.profileImage}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{staff.fullName}</h3>
                            {staff.position && (
                              <p className="text-sm text-muted-foreground mb-2">{staff.position}</p>
                            )}
                            {staff.contactInfo?.email && (
                              <p className="text-sm text-muted-foreground">
                                📧 {staff.contactInfo.email}
                              </p>
                            )}
                            {staff.contactInfo?.phone && (
                              <p className="text-sm text-muted-foreground">
                                📞 {staff.contactInfo.phone}
                              </p>
                            )}
                          </div>
                        </div>
                        {staff.bio && (
                          <div className="mt-4 text-sm text-muted-foreground">
                            <RichText data={staff.bio} enableGutter={false} />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Head of Department */}
            {headOfDepartment && typeof headOfDepartment === 'object' && (
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Head of Department</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="font-medium">{headOfDepartment.fullName}</p>
                    {headOfDepartment.position && (
                      <p className="text-sm text-muted-foreground">{headOfDepartment.position}</p>
                    )}
                  </div>
                  {(headOfDepartment.contactInfo?.email || headOfDepartment.contactInfo?.phone) && (
                    <div className="space-y-1 text-sm">
                      {headOfDepartment.contactInfo?.email && (
                        <p className="text-muted-foreground">
                          📧 {headOfDepartment.contactInfo.email}
                        </p>
                      )}
                      {headOfDepartment.contactInfo?.phone && (
                        <p className="text-muted-foreground">
                          📞 {headOfDepartment.contactInfo.phone}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Contact Information */}
            {contactInfo && (contactInfo.email || contactInfo.phone || contactInfo.office) && (
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {contactInfo.email && (
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">📧</span>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary hover:underline"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  )}
                  {contactInfo.phone && (
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">📞</span>
                      <Link
                        href={`tel:${contactInfo.phone}`}
                        className="text-primary hover:underline"
                      >
                        {contactInfo.phone}
                      </Link>
                    </div>
                  )}
                  {contactInfo.office && (
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">📍</span>
                      <span>{contactInfo.office}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Department Overview</h3>
              <div className="space-y-3">
                {programs && Array.isArray(programs) && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Programs Offered</span>
                    <span className="font-medium">{programs.length}</span>
                  </div>
                )}
                {staffMembers && Array.isArray(staffMembers) && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Faculty & Staff</span>
                    <span className="font-medium">{staffMembers.length}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })

  const departments = await payload.find({
    collection: 'departments',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
  })

  const department = departments.docs[0]

  if (!department) {
    return {
      title: 'Department Not Found',
    }
  }

  return {
    title: `${department.title} | SDU Institute`,
    description:
      department.meta?.description ||
      `Learn about the ${department.title} department at SDU Institute.`,
    openGraph: {
      title: `${department.title} | SDU Institute`,
      description:
        department.meta?.description ||
        `Learn about the ${department.title} department at SDU Institute.`,
      images:
        department.meta?.image && typeof department.meta.image === 'object'
          ? [{ url: department.meta.image.url || '' }]
          : undefined,
    },
  }
}
