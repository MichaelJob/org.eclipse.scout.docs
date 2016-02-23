package org.eclipse.scout.contacts.events.shared.person;

import java.io.Serializable;

import javax.annotation.Generated;

import org.eclipse.scout.contacts.shared.person.PersonTablePageData.PersonTableRowData;
import org.eclipse.scout.rt.platform.extension.Extends;

/**
 * <b>NOTE:</b><br>
 * This class is auto generated by the Scout SDK. No manual modifications recommended.
 */
@Extends(PersonTableRowData.class)
@Generated(value = "org.eclipse.scout.contacts.events.client.person.PersonTablePageExtension", comments = "This class is auto generated by the Scout SDK. No manual modifications recommended.")
public class PersonTablePageDataExtension implements Serializable {

  private static final long serialVersionUID = 1L;
  public static final String events = "events";
  private Long m_events;

  public Long getEvents() {
    return m_events;
  }

  public void setEvents(Long newEvents) {
    m_events = newEvents;
  }
}