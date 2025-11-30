# n8n Workflow Screenshots

Place your n8n workflow screenshots in this folder.

## Instructions:

1. **Export/Screenshot your n8n workflows**
   - Open your n8n workflow
   - Take a screenshot or export the workflow visualization
   - Save as PNG or JPG format

2. **Name your files:**
   - `deal-flow-notifier.png` - Deal Flow & Sales Pipeline Notifier workflow
   - `upwork-scraper.png` - Upwork Job Scraper & AI Qualifier workflow
   - `workflow-3.png` - Your third workflow (or rename as needed)
   - Or any custom name and update in `src/components/Workflows.jsx`

3. **Update the Workflows component:**
   - Open `src/components/Workflows.jsx`
   - Update the `workflows` array with your actual workflow details:
     - `title`: Name of your workflow
     - `description`: What the workflow does
     - `image`: Path to your screenshot (e.g., `/workflows/workflow-1.png`)
     - `tags`: Technologies/services used in the workflow

## Example:

```javascript
{
  title: 'AI Content Generation Workflow',
  description: 'Automated content creation using n8n, OpenAI, and various integrations',
  image: '/workflows/ai-content-workflow.png',
  tags: ['n8n', 'OpenAI', 'Automation', 'Slack']
}
```

## Recommended Image Size:
- **Resolution**: 1920x1080px or similar 16:9 aspect ratio
- **Format**: PNG (for better quality) or JPG
- **File Size**: Keep under 500KB for faster loading

## Tips:
- Use light backgrounds for better visibility in the light theme
- Capture the entire workflow or the most important parts
- Add annotations or highlights to important nodes if needed
- Use descriptive filenames
