import React from 'react';
import Editor from "@monaco-editor/react";
import { FiArrowLeft, FiChevronLeft } from 'react-icons/fi';

const CodeEditor = (props) => {
    return (
        <div className='container p-0'>
            <FiChevronLeft size={24} color='#000' style={{marginBottom: '20px', cursor: 'pointer'}}
            onClick={() => props.handleBack()} />
            <div className="header-body mb-4">
                <div>
                    <h6 className="header-pretitle">
                        Overview
                    </h6>
                    <h1 className="header-title text-truncate">
                        {props?.data?.type}
                    </h1>
                </div>
            </div>
            <Editor
                height="90vh"
                defaultLanguage="javascript"
                defaultValue={props.data?.data}
            />
        </div>
    );
};

export default CodeEditor;
