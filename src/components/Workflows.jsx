import { motion } from 'framer-motion'
import { FaProjectDiagram } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const Workflows = () => {
  // Add your n8n workflow screenshots here
  // Place images in public/workflows/ folder
  const workflows = [
    {
      title: 'Deal Flow & Sales Pipeline Notifier',
      description: 'Real-time visibility for sales pipeline movements by instantly announcing updates in Slack when deal stages change in Google Sheets',
      image: '/workflows/deal-flow-notifier.png',
      tags: ['n8n', 'Google Sheets', 'Slack', 'Automation']
    },
    {
      title: 'Upwork Job Scraper & AI Qualifier',
      description: 'Automated lead funnel using web scraping to find freelance jobs, AI filtering to qualify leads, and Slack notifications for high-quality opportunities',
      image: '/workflows/upwork-scraper.png',
      tags: ['n8n', 'Web Scraping', 'OpenAI', 'Slack', 'Google Sheets']
    },
    {
      title: 'Multi-Platform Integration Workflow',
      description: 'Complex automation workflow integrating multiple platforms and services with conditional logic and data transformation',
      image: '/workflows/workflow-3.png',
      tags: ['n8n', 'API Integration', 'Automation']
    },
  ]

  return (
    <section id="workflows" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <FaProjectDiagram className="text-5xl text-primary drop-shadow-[0_0_16px_rgba(34,211,238,0.5)]" />
          </motion.div>
          <SectionHeading
            index="05"
            eyebrow="AUTOMATION"
            title="n8n"
            highlight="Workflows"
            subtitle="Automated workflows built with n8n for various business processes and integrations"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.15)] transition-all cursor-pointer"
            >
              {/* Workflow Image */}
              <div className="relative overflow-hidden bg-panel aspect-video border-b border-white/10">
                <img
                  src={workflow.image}
                  alt={workflow.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML += `
                      <div class="absolute inset-0 flex items-center justify-center">
                        <svg class="w-24 h-24 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    `
                  }}
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold">View Workflow</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {workflow.title}
                </h3>
                <p className="text-textSecondary text-sm mb-4 leading-relaxed">
                  {workflow.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {workflow.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8 bg-gradient-to-r from-primary/[0.08] to-secondary/[0.08] hover:border-primary/40 transition-all"
        >
          <div className="flex items-start gap-4">
            <FaProjectDiagram className="text-4xl text-primary flex-shrink-0 mt-1 drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]" />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Workflow Automation Expertise
              </h3>
              <p className="text-textSecondary leading-relaxed">
                Experienced in building complex automation workflows with n8n, integrating various APIs,
                databases, and services to streamline business processes. Specializing in AI-powered
                workflows, data pipelines, and multi-system integrations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Workflows
