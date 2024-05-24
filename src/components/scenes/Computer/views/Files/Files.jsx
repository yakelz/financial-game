import React, { useState } from 'react';
import styles from './Files.module.css';
import CloseButton from '@ui/Buttons/CloseButton/CloseButton';
import FilesIco from '@assets/Computer/files.svg?react';

import FileImage from '@assets/Computer/file_image.svg?react';
import FileText from '@assets/Computer/file_text.svg?react';

import FilesList from '@core/data/files';

function Files() {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileClick = (file) => {
		setSelectedFile(file);
	};

	const handleCloseModal = () => {
		setSelectedFile(null);
	};

	return (
		<>
			<div className={styles.container}>
				<header className={styles.header}>
					<FilesIco />
					<h2>Файлы</h2>
				</header>
				<main>
					{FilesList.map((file) => (
						<div key={file.id} className={styles.file} onClick={() => handleFileClick(file)}>
							{file.type === 'image' ? <FileImage /> : <FileText />}
							<span>{file.name}</span>
						</div>
					))}
				</main>
				{selectedFile && (
					<>
						<div className={styles.modalBackground}>
							<div className={styles.modal}>
								<h2>{selectedFile.name}</h2>
								{selectedFile.type === 'image' ? (
									<img
										src={selectedFile.content}
										alt={selectedFile.name}
										className={styles.modalImage}
									/>
								) : (
									<p>{selectedFile.content}</p>
								)}
								<CloseButton className={styles.close} onClick={handleCloseModal} />
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default Files;
