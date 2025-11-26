import React from 'react'
import { Box } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import DescriptionIcon from '@mui/icons-material/Description';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import TableChartIcon from '@mui/icons-material/TableChart';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';




function MailToolBar() {
    const apply = (cmd) => {
        document.execCommand(cmd, false, null);
    };

    const actions = [
        { icon: <FormatBoldIcon />, cmd: "bold" },
        { icon: <FormatItalicIcon />, cmd: "italic" },
        { icon: <FormatUnderlinedIcon />, cmd: "underline" },
        { icon: <StrikethroughSIcon />, cmd: "strikethrough" },
        { icon: <FormatListBulletedIcon />, cmd: "insertOrderedList" },
        { icon: <FormatListNumberedIcon />, cmd: "insertUnorderedList" },
        { icon: <FormatAlignLeftIcon />, cmd: "justifyLeft" },
        { icon: <FormatAlignCenterIcon />, cmd: "justifyCenter" },
        { icon: <FormatAlignRightIcon />, cmd: "justifyRight" },
        { icon: <FormatIndentIncreaseIcon />, cmd: "indent" },
        { icon: <FormatIndentDecreaseIcon />, cmd: "outdent" },
        { icon: <UndoIcon />, cmd: "undo" },
        { icon: <RedoIcon />, cmd: "redo" },
        { icon: <LinkIcon />, cmd: "createLink", prompt: "Enter URL" },
        { icon: <ImageIcon />, cmd: "insertImage", prompt: "Enter Image URL" },
        { icon: <VideoLibraryIcon />, custom: () => { const url = prompt("Enter Video URL:"); if (url) { document.execCommand("insertHTML", false, `<video controls src="${url}"></video>`); } } },
        { icon: <AudiotrackIcon />, custom: () => { const url = prompt("Enter Audio URL:"); if (url) { document.execCommand("insertHTML", false, `<audio controls src="${url}"></audio>`); } } },
        { icon: <DescriptionIcon />, custom: () => { const url = prompt("Enter File URL:"); if (url) { document.execCommand("insertHTML", false, `<a href="${url}" target="_blank">Dawnload File</a>`); } } },
        { icon: <HorizontalRuleIcon />, cmd: "insertHorizontalRule" },
        {
            icon: <TableChartIcon />, custom: () => {
                document.execCommand("insertHTML", false, ` <table border="1" style="border-collapse:collapse;">
            <tr><td>Cell</td><td>Cell</td></tr>
            <tr><td>Cell</td><td>Cell</td></tr>
          </table>
        `);
            }
        },
        { icon: <FormatColorTextIcon />, custom: () => { const color = prompt("Enter Text Color:"); if (color) { document.execCommand("foreColor", false, color); } } },
        { icon: <FormatColorFillIcon />, custom: () => { const color = prompt("Enter highlight Color:"); if (color) { document.execCommand("hiliteColor", false, color); } } },
        { icon: <TextIncreaseIcon />, custom: () => { const size = prompt("Font size (1 - 7):"); if (size) { document.execCommand("fontSize", false, size); } } }
    ]

    return (
        <Box
            sx={{
                display: "flex",
                gap: 1,
                p: 1,
                borderBottom: "1px solid #eee",
                justifyContent: 'center',
                backgroundColor: '#DFE7E5',
                borderTopRightRadius: '5px',
                borderTopLeftRadius: '5px'
            }}
        >
            {actions.map((a, i) => (
                <Box 
                    key={i}
                    sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "6px",
                        borderRadius: "4px",
                        "&:hover": { backgroundColor: "#cbd5d3" }
                    }}
                    onClick={() => {
                        if (a.custom) {
                            a.custom()
                        } else if (a.prompt) {
                            const input = prompt(a.prompt)
                            input && apply(a.cmd, input)
                        } else {
                        } apply(a.cmd)
                    }
                    }
                >
                    {a.icon}
                </Box>
            ))}
        </Box>
    );

}

export default MailToolBar




