package com.minatoorgtestcase.gitwarningfail.service;

import com.vs.rappit.base.model.Changelog;
import com.vs.rappit.base.service.changelog.ChangelogBLBaseImpl;
import org.springframework.stereotype.Service;

@Service
public class ChangelogService extends ChangelogBLBaseImpl {
	@Override
	public void fillAdditionalInfo(Changelog changelog) {
		
	}
}
