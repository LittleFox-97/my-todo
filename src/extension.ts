// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import type * as vscode from 'vscode'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('расширение "my-todo" активировано')
  const newVariable = context.extension.packageJSON.contributes.configuration.properties
  console.log(newVariable)
}

// This method is called when your extension is deactivated
export function deactivate() { }

function parseJsonConfig() {
  const configObj = {
    'todo.file.name': {
      type: 'string',
      description: 'Todo file name. Other supported names are: `*.todo`, `*.todos`, `*.task`, `*.tasks`, `*.taskpaper` and `todolist.txt`',
      default: 'TODO',
    },
    'todo.file.defaultContent': {
      type: 'string',
      description: 'New todo files default content',
      default: '\nTodo:\n  ☐ Item\n',
    },
    'todo.file.include': {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Globs to use for including files',
      default: [
        '**/TODO',
        '**/TODOS',
        '**/*.TODO',
        '**/*.TODOS',
        '**/*.todo',
        '**/*.todos',
        '**/*.task',
        '**/*.tasks',
        '**/*.taskpaper',
        '**/todolist.txt',
      ],
    },
    'todo.file.exclude': {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Globs to use for excluding files',
      default: [
        '**/.!(todo|todos|task|tasks)/**',
        '**/_output/**',
        '**/bower_components/**',
        '**/build/**',
        '**/dist/**',
        '**/venv/**',
        '**/node_modules/**',
        '**/out/**',
        '**/output/**',
        '**/release/**',
        '**/releases/**',
        '**/static/**',
        '**/target/**',
        '**/third_party/**',
        '**/vendor/**',
      ],
    },
    'todo.file.view.expanded': {
      type: 'boolean',
      description: 'Start the tree in an expanded state',
      default: true,
    },
    'todo.indentation': {
      type: 'string',
      description: 'String used for indentation',
      default: '  ',
    },
    'todo.symbols.box': {
      type: 'string',
      description: 'Todo box string',
      default: '☐',
    },
    'todo.symbols.done': {
      type: 'string',
      description: 'Todo done string',
      default: '✔',
    },
    'todo.symbols.cancelled': {
      type: 'string',
      description: 'Todo cancelled string',
      default: '✘',
    },
    'todo.colors.done': {
      type: 'string',
      description: 'Done todo color',
      default: '#a6e22e',
    },
    'todo.colors.cancelled': {
      type: 'string',
      description: 'Cancelled todo color',
      default: '#f92672',
    },
    'todo.colors.code': {
      type: 'string',
      description: 'Code color',
      default: '#fd971f',
    },
    'todo.colors.comment': {
      type: 'string',
      description: 'Comment color',
      default: '#75715e',
    },
    'todo.colors.project': {
      type: 'string',
      description: 'Project color',
      default: '#66d9ef',
    },
    'todo.colors.projectStatistics': {
      type: 'string',
      description: 'Project statistics color',
      default: '#4694a3',
    },
    'todo.colors.tag': {
      type: 'string',
      description: 'Tag color',
      default: '#e6db74',
    },
    'todo.colors.tags.background': {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Special tags\' background colors',
      default: [
        '#e54545',
        '#e59f45',
        '#e5d145',
        '#ae81ff',
      ],
    },
    'todo.colors.tags.foreground': {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Special tags\' foreground colors',
      default: [
        '#000000',
        '#000000',
        '#000000',
        '#000000',
      ],
    },
    'todo.colors.types': {
      type: 'object',
      description: 'Object mapping todo types to their color',
      default: {
        TODO: '#ffcc00',
        FIXME: '#cc0000',
        FIX: '#cc0000',
        BUG: '#cc0000',
        UGLY: '#cc0000',
        DEBUG: '#cc0000',
        HACK: '#cc0000',
        REVIEW: '#00ccff',
        OPTIMIZE: '#00ccff',
        TSC: '#00ccff',
        NOTE: '#cc00cc',
        IDEA: '#cc00cc',
      },
    },
    'todo.colors.dark': {
      type: 'object',
      description: 'Colors for dark themes',
      properties: {
        done: {
          type: 'string',
        },
        cancelled: {
          type: 'string',
        },
        code: {
          type: 'string',
        },
        comment: {
          type: 'string',
        },
        project: {
          type: 'string',
        },
        projectStatistics: {
          type: 'string',
        },
        tag: {
          type: 'string',
        },
        tags: {
          type: 'object',
          properties: {
            background: {
              type: 'array',
            },
            foreground: {
              type: 'array',
            },
          },
        },
        types: {
          type: 'object',
        },
      },
      default: {
      },
    },
    'todo.colors.light': {
      type: 'object',
      description: 'Colors for light themes',
      properties: {
        done: {
          type: 'string',
        },
        cancelled: {
          type: 'string',
        },
        code: {
          type: 'string',
        },
        comment: {
          type: 'string',
        },
        project: {
          type: 'string',
        },
        projectStatistics: {
          type: 'string',
        },
        tag: {
          type: 'string',
        },
        tags: {
          type: 'object',
          properties: {
            background: {
              type: 'array',
            },
            foreground: {
              type: 'array',
            },
          },
        },
        types: {
          type: 'object',
        },
      },
      default: {
      },
    },
    'todo.tags.names': {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Special tags\' names',
      default: [
        'critical',
        'high',
        'low',
        'today',
      ],
    },
    'todo.tags.namesInference': {
      type: 'boolean',
      description: 'Infer commonly used tags\' names',
      default: true,
    },
    'todo.archive.name': {
      type: 'string',
      description: 'Name of the special "Archive" project',
      default: 'Archive',
    },
    'todo.archive.remove.emptyProjects': {
      type: 'boolean',
      description: 'Remove projects without todos',
      default: true,
    },
    'todo.archive.remove.emptyLines': {
      type: 'number',
      description: 'Remove extra empty lines, keeping no more than `emptyLinesThreshold` consecutive empty lines',
      default: 1,
    },
    'todo.archive.project.enabled': {
      type: 'boolean',
      description: 'Enable the @project tag',
      default: true,
    },
    'todo.archive.project.separator': {
      type: 'string',
      description: 'String used for joining multiple projects',
      default: '.',
    },
    'todo.archive.sortByDate': {
      type: 'boolean',
      description: 'Sort lines by finished date',
      default: false,
    },
    'todo.formatting.enabled': {
      type: 'boolean',
      description: 'Enable markdown-like formatting',
      default: true,
    },
    'todo.timekeeping.created.enabled': {
      type: 'boolean',
      description: 'Enable the @created tag',
      default: false,
    },
    'todo.timekeeping.created.time': {
      type: 'boolean',
      description: 'Insert the time inside the @created tag',
      default: true,
    },
    'todo.timekeeping.created.format': {
      type: 'string',
      description: 'Format used for displaying time inside @created',
      default: 'YY-MM-DD HH:mm',
    },
    'todo.timekeeping.started.time': {
      type: 'boolean',
      description: 'Insert the time inside the @started tag',
      default: true,
    },
    'todo.timekeeping.started.format': {
      type: 'string',
      description: 'Format used for displaying time inside @started',
      default: 'YY-MM-DD HH:mm',
    },
    'todo.timekeeping.finished.enabled': {
      type: 'boolean',
      description: 'Enable the @done/cancelled tag. It\'s always enabled if you explicitly start a todo or if you use only 1 symbol',
      default: true,
    },
    'todo.timekeeping.finished.time': {
      type: 'boolean',
      description: 'Insert the time inside the @done/cancelled tag',
      default: true,
    },
    'todo.timekeeping.finished.format': {
      type: 'string',
      description: 'Format used for displaying time inside @done/cancelled',
      default: 'YY-MM-DD HH:mm',
    },
    'todo.timekeeping.elapsed.enabled': {
      type: 'boolean',
      description: 'Enable the @lasted/wasted tag',
      default: true,
    },
    'todo.timekeeping.elapsed.format': {
      type: 'string',
      enum: [
        'long',
        'short',
        'short-compact',
        'clock',
        'hours',
      ],
      description: 'Format used for displaying time diff inside @lasted/wasted',
      default: 'short-compact',
    },
    'todo.timekeeping.estimate.format': {
      type: 'string',
      enum: [
        'long',
        'short',
        'short-compact',
        'clock',
        'hours',
      ],
      description: 'Format used for the `[est]`, `[est-total]`, `[est-finished]` and `[est-finished-percentage]` tokens',
      default: 'short-compact',
    },
    'todo.timer.statusbar.enabled': {
      type: [
        'boolean',
        'string',
      ],
      enum: [
        'estimate',
      ],
      description: 'Show a timer for started todos in the statusbar',
      default: true,
    },
    'todo.timer.statusbar.alignment': {
      type: 'string',
      description: 'Should the item be placed to the left or right?',
      default: 'left',
    },
    'todo.timer.statusbar.color': {
      type: 'string',
      description: 'The foreground color for this item',
      default: '',
    },
    'todo.timer.statusbar.priority': {
      type: 'boolean',
      description: 'The priority of this item. Higher value means the item should be shown more to the left',
      default: -10,
    },
    'todo.statistics.project.enabled': {
      type: [
        'boolean',
        'string',
      ],
      description: 'Show statistics next to a project, boolean or JS expression',
      default: 'global.projects < 100 && project.all > 0',
    },
    'todo.statistics.project.text': {
      type: 'string',
      description: 'Template used for rendering the text',
      default: '([pending]) [est]',
    },
    'todo.statistics.statusbar.enabled': {
      type: [
        'boolean',
        'string',
      ],
      description: 'Show statistics in the statusbar, boolean or JS expression',
      default: 'global.all > 0',
    },
    'todo.statistics.statusbar.ignoreArchive': {
      type: 'boolean',
      description: 'Ignore the archive when rendering statistics in the statusbar',
      default: true,
    },
    'todo.statistics.statusbar.alignment': {
      type: 'string',
      description: 'Should the item be placed to the left or right?',
      default: 'left',
    },
    'todo.statistics.statusbar.color': {
      type: 'string',
      description: 'The foreground color for this item',
      default: '',
    },
    'todo.statistics.statusbar.command': {
      type: 'string',
      description: 'Command to execute on click',
      default: '',
    },
    'todo.statistics.statusbar.priority': {
      type: 'number',
      description: 'The priority of this item. Higher value means the item should be shown more to the left',
      default: -1,
    },
    'todo.statistics.statusbar.text': {
      type: 'string',
      description: 'Template used for rendering the text',
      default: '$(check) [finished]/[all] ([percentage]%)',
    },
    'todo.statistics.statusbar.tooltip': {
      type: 'string',
      description: 'Template used for rendering the tooltip',
      default: '[pending] Pending - [done] Done - [cancelled] Cancelled',
    },
    'todo.embedded.regex': {
      type: 'string',
      description: 'Regex used for finding embedded todos, requires double escaping',
      default: '(?:<!-- *)?(?:#|// @|//|/\\*+|<!--|--|\\* @|\\{!|\\{\\{!--|\\{\\{!) *(TODO|FIXME|FIX|BUG|UGLY|HACK|NOTE|IDEA|REVIEW|DEBUG|OPTIMIZE)(?:\\s*\\([^)]+\\))?:?(?!\\w)(?: *-->| *\\*/| *!}| *--}}| *}}|(?= *(?:[^:]//|/\\*+|<!--|@|--|\\{!|\\{\\{!--|\\{\\{!))|((?: +[^\\n@]*?)(?= *(?:[^:]//|/\\*+|<!--|@|--(?!>)|\\{!|\\{\\{!--|\\{\\{!))|(?: +[^@\\n]+)?))',
    },
    'todo.embedded.regexFlags': {
      type: 'string',
      description: 'Regex flags to use',
      default: 'gi',
    },
    'todo.embedded.include': {
      type: 'array',
      description: 'Globs to use for including files',
      default: [
        '**/*',
      ],
    },
    'todo.embedded.exclude': {
      type: 'array',
      description: 'Globs to use for excluding files',
      default: [
        '**/.*',
        '**/.*/**',
        '**/_output/**',
        '**/bower_components/**',
        '**/build/**',
        '**/dist/**',
        '**/venv/**',
        '**/node_modules/**',
        '**/out/**',
        '**/output/**',
        '**/release/**',
        '**/releases/**',
        '**/static/**',
        '**/target/**',
        '**/third_party/**',
        '**/vendor/**',
        '**/CHANGELOG',
        '**/CHANGELOG.*',
        '**/*.min.*',
        '**/*.map',
        '**/*.{3ds,3g2,3gp,7z,a,aac,adp,ai,aif,aiff,alz,ape,apk,ar,arj,asf,au,avi,bak,baml,bh,bin,bk,bmp,btif,bz2,bzip2,cab,caf,cgm,class,cmx,cpio,cr2,csv,cur,dat,dcm,deb,dex,djvu,dll,dmg,dng,doc,docm,docx,dot,dotm,dra,DS_Store,dsk,dts,dtshd,dvb,dwg,dxf,ecelp4800,ecelp7470,ecelp9600,egg,eol,eot,epub,exe,f4v,fbs,fh,fla,flac,fli,flv,fpx,fst,fvt,g3,gif,graffle,gz,gzip,h261,h263,h264,icns,ico,ief,img,ipa,iso,jar,jpeg,jpg,jpgv,jpm,jxr,key,ktx,lha,lib,lvp,lz,lzh,lzma,lzo,m3u,m4a,m4v,mar,mdi,mht,mid,midi,mj2,mka,mkv,mmr,mng,mobi,mov,movie,mp3,mp4,mp4a,mpeg,mpg,mpga,mxu,nef,npx,numbers,o,oga,ogg,ogv,otf,pages,pbm,pcx,pdb,pdf,pea,pgm,pic,png,pnm,pot,potm,potx,ppa,ppam,ppm,pps,ppsm,ppsx,ppt,pptm,pptx,psd,pya,pyc,pyo,pyv,qt,rar,ras,raw,resources,rgb,rip,rlc,rmf,rmvb,rtf,rz,s3m,s7z,scpt,sgi,shar,sil,sketch,slk,smv,so,sub,swf,tar,tbz,tbz2,tga,tgz,thmx,tif,tiff,tlz,ttc,ttf,txz,udf,uvh,uvi,uvm,uvp,uvs,uvu,viv,vob,war,wav,wax,wbmp,wdp,weba,webm,webp,whl,wim,wm,wma,wmv,wmx,woff,woff2,wvx,xbm,xif,xla,xlam,xls,xlsb,xlsm,xlsx,xlt,xltm,xltx,xm,xmind,xpi,xpm,xwd,xz,z,zip,zipx}',
      ],
    },
    'todo.embedded.provider': {
      type: 'string',
      enum: [
        'javascript',
        'ag',
        'rg',
      ],
      description: 'The provider to use when searching for embedded todos',
      default: '',
    },
    'todo.embedded.providers.ag.regex': {
      type: 'string',
      description: 'Regex used by ag, requires double escaping',
      default: '(?:#|// @|//|/\\*+|<!--|--|\\* @|\\{!|\\{\\{!--|\\{\\{!) *(TODO|FIXME|FIX|BUG|UGLY|HACK|NOTE|IDEA|REVIEW|DEBUG|OPTIMIZE)',
    },
    'todo.embedded.providers.ag.args': {
      type: 'string',
      description: 'Extra arguments to pass to ag',
      default: [
        '--ignore-case',
      ],
    },
    'todo.embedded.providers.rg.regex': {
      type: 'string',
      description: 'Regex used by rg, requires double escaping',
      default: '(?:#|// @|//|/\\*+|<!--|--|\\* @|\\{!|\\{\\{!--|\\{\\{!) *(TODO|FIXME|FIX|BUG|UGLY|HACK|NOTE|IDEA|REVIEW|DEBUG|OPTIMIZE)',
    },
    'todo.embedded.providers.rg.args': {
      type: 'string',
      description: 'Extra arguments to pass to rg',
      default: [
        '--ignore-case',
      ],
    },
    'todo.embedded.file.wholeLine': {
      type: 'boolean',
      description: 'Show the whole line',
      default: true,
    },
    'todo.embedded.file.groupByRoot': {
      type: 'boolean',
      description: 'Group embedded todos by workspace root',
      default: true,
    },
    'todo.embedded.file.groupByType': {
      type: 'boolean',
      description: 'Group embedded todos by type',
      default: true,
    },
    'todo.embedded.file.groupByFile': {
      type: 'boolean',
      description: 'Group embedded todos by file',
      default: true,
    },
    'todo.embedded.view.wholeLine': {
      type: 'boolean',
      description: 'Show the whole line',
      default: false,
    },
    'todo.embedded.view.sort': {
      type: 'string',
      enum: [
        'line',
        'label',
      ],
      description: 'Sort todos either by label or by source line number',
      default: 'line',
    },
    'todo.embedded.view.groupByRoot': {
      type: 'boolean',
      description: 'Group embedded todos by workspace root',
      default: true,
    },
    'todo.embedded.view.groupByType': {
      type: 'boolean',
      description: 'Group embedded todos by type',
      default: true,
    },
    'todo.embedded.view.groupByFile': {
      type: 'boolean',
      description: 'Group embedded todos by file',
      default: true,
    },
    'todo.embedded.view.expanded': {
      type: 'boolean',
      description: 'Start the tree in an expanded state',
      default: true,
    },
    'todo.embedded.view.icons': {
      type: 'boolean',
      description: 'Show icons next to todos and types',
      default: true,
    },
  } as const
}
